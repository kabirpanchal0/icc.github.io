const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const nodemailer = require('nodemailer');
const { Console, error, log } = require("console");


const app = express();
app.use(cors());
app.use(express.json());
db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "reg"

})

app.post('/signup', (req, res) => {
    const data = [{
        name: req.body.name,
        email: req.body.email,
        phoneno: req.body.phoneno,
        age:req.body.age,
        gender:req.body.gender,
        dob:req.body.dob,
        city:req.body.city,
        state:req.body.state,
        country:req.body.country,
        nationality:req.body.nationality,
        password: req.body.password,
        c_password: req.body.confirmpassword
    }
    ]

    db.query("INSERT INTO login SET ? ", (data), (err, result) => {
        if (err) {
            console.log(err)
        } 
        if(req.body.password === req.body.confirmpassword) {
           
            return res.json({
                success: 1,
                message: "Registration successfully"
            })
            
        }
        else{
          
             return res.json({
            success: 0,
            message: "password doesn't match"
          })
          
        }
    })
})

app.post("/logins", async (req, res) => {
    let email = req.body.email;


    db.query("select * from login WHERE `email` = ?", email, (err, results) => {
        if (err) {
            //res.send(err);
            console.log(err)
        }
        if (results && results.length > 0) {
            if (req.body.password == results[0].password) {

                return res.json({
                    success: 1,
                    message: "success",
                    details: results[0]
                });
            } else {
                return res.json({
                    success: 0,
                    data: "Invalid Email or Password Combination",
                });
            }
        } else {
            return res.json({
                success: 0,
                data: "Email Id Not Found",
            });
        }
    });
});

app.post("/fetch", (req, res)=>{
    const user_id = req.body.id;
    console.log(user_id);
    db.query("SELECT * FROM login WHERE id",(user_id), (err, result)=>{
        if(err)
        {
            throw err;
        }
        else if(result.length>0){
            res.json({
                success:1,
                details:result
            })
        }
    })
})
app.post("/fetchadmin", (req, res)=>{
    const admin_id = req.body.id;
    console.log(admin_id);
    db.query("select * from admin where id",(admin_id), (err, result)=>{
        if(err)
        {
            throw err;
        }
        else if(result.length>0){
            res.json({
                success:1,
                details:result
            })
        }
    })
})

//Admin api

app.post('/adminsignup', (req, res) => {
    const data = [{
        name: req.body.name,
        email: req.body.email,
        phoneno: req.body.phoneno,
        password: req.body.password,
        
    }
    ]

    db.query("INSERT INTO admin SET ? ", (data), (err, result) => {
        if (err) {
            console.log(err)
        } 
        if(req.body.password !== 0) {
           
            return res.json({
                success: 1,
                message: "Registration successfully"
            })
            
        }
        else{
          
             return res.json({
            success: 0,
            message: "password doesn't match"
          })
          
        }
    })
})


app.post("/adminsignin", async (req, res) => {
    let email = req.body.email;


    db.query("select * from admin WHERE email = ?", email, (err, results) => {
        if (err) {
            //res.send(err);
            console.log(err)
        }
        else if (results.length > 0) {
        

                console.log(req.body.password)
                console.log(results[0].password)
                return res.json({
                    success: 1,
                    message: "success",
                    details: results[0]
                });
          
         
        } else {
            return res.json({
                success: 0,
                data: "Email Id Not Found",
            });
        }
    });
});

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM login WHERE id=?", id, (err, result) => {
        if (err) { console.log(err) } else {
            return res.json({
                success: 1,
                message: "Userid was deleted."
            })
        }
    })
})


app.post("/forgot", (req, res)=>{
    const email = req.body.email;
    db.query("select *  from login where email = ?", email, (err, result)=>{
        if(err){
            throw err;
        }
        else if(result.length > 0){
                console.log("emailsend");
            let transport = nodemailer.createTransport({
                service: "gmail",
                host: 'smtp.gmail.com',
                auth:{
                    user:"harish.ken786@gmail.com",
                    pass:'kbvrnhdkjptqslsx'
                },

            })
            const crypto = require("crypto");
            const token = crypto.randomBytes(10).toString("hex");
            const reseturl = new URL(`http://localhost:3000/reset/${token}`);



            let info =  transport.sendMail({
                    from:`"kabir panchal" <kabirpanchal>`,
                    to: email,
                    subject: "Reset password",
                    text: `hello here is your reset passwod link`,
                    html: `<a href="resetyourpasswordhere">Click here to reset your password</a>`

            });

            
        }
        else{  console.log("no email found");}
          
        }
        
             
        
          
        
    )
})

app.post('/changepassword', (req, res) => {
    let password = req.body.password;
    let n_password = req.body.new_password;
    let con_password = req.body.c_password;
  
    let data = [{
        old_password: req.body.password,
        new_password: req.body.new_password,
        c_password: req.body.c_password,

    }];
    db.query('SELECT * FROM login WHERE password = ?', password, (err, result) => {
        if (err) err;
        // console.log(result)
        if (result && result.length > 0) {
            if (req.body.password == result[0].password) {
                if (password == n_password || password == con_password) {
                    return res.json({
                        success: 0,
                        message: "Please Enter Password You have not used Before."
                    });
                } else {
                    if (n_password == con_password) {
                        db.query("INSERT INTO changepassword SET ? ", data, (err, results) => {
                            if (err) {
                                console.log(err);
                            } else {
                                if (results == null) {
                                    console.log("password was not updated")
                                } else {
                                    db.query('UPDATE login  SET password = ? , c_password = ? WHERE password = ? ', [n_password, con_password, password], (err, reslt) => {
                                        if (err) { console.log(err) }
                                       
                                    });
                                }
                                console.log("password Changed");
                                return res.json({
                                    success: 1,
                                    message: "Password Changed Successfully",
                                });
                            }
                        });
                    } else {
                            console.log("Please Enter the New_Password & Confrim_Password Same");
                        return res.json({
                            success: 0,
                            message: "Please Enter the New_Password & Confrim_Password Same "
                        });
                    }
                }
            }
        } else {
            console.log("Please Enter the Correct Password.");
            res.json({
                success: 0,
                message: "Please Enter the Correct Password."
            });
        }
    });
});

app.post('/resetpassword', (req, res) => {
    const password = req.body;
    const id = req.params.id // Assuming you have the updated data in the request body
  
    // Construct the update query
    const query = 'UPDATE login SET password = ? WHERE email ? AND id = ?';
    const values = [password, id];
  
    // Execute the update query
    db.query(query, values, (err, result) => {
      if (err) {
        console.error('Error updating data:', err);
        res.status(500).json({ error: 'An error occurred while updating data' });
        return;
      }
      console.log('Data updated successfully');
      res.json({ success: true });
    });
  });

app.post('/feedback', (res, req) => {
    const data = [{
        username: req.body.username,
        email: req.body.email,
        feedback: req.body.feedback
    }];
    
    db.query("INSERT INTO feedback SET ? ", (data), (err, result) => {
        if (err) {
            console.log(err)
        } 
        if(result !== 0) {
           
            return res.json({
                success: 1,
                message: "successfully send feedback"
            })
            
        }
        else{
          
             return res.json({
            success: 0,
            message: "data not found"
          })
          
        }
    });

});

// app.post('/countries', (req, res) =>{
//     db.query('SELECT * FROM countries', (err, results) =>{
//         if(err) throw err;
//         res.json(results);
//     });
// });
app.get('/countries', (req, res) =>{
    db.query('SELECT * FROM countries', (err, results) =>{
        if(err) throw err;
        res.json(results);
    });
});


app.post('/addcountry', (req, res) => {
    const data = {
        name: req.body.name,
    };

    db.query("INSERT INTO countries SET ?", data, (err, result) => {
        if (err) {
            console.log(err);
            return res.json({
                success: 0,
                message: "An error occurred"
            });
        }
        
        return res.json({
            success: 1,
            message: "country added"
        });
    });
});


app.post('/addcourses', (req, res) => {
    const data = {
        name: req.body.name,
    };

    db.query("INSERT INTO courses SET ?", data, (err, result) => {
        if (err) {
            console.log(err);
            return res.json({
                success: 0,
                message: "An error occurred"
            });
        }
        
        return res.json({
            success: 1,
            message: "course added"
        });
    });
});


app.post('/collagesdata', (req, res) =>{
    db.query('SELECT * FROM collages', (err, results) =>{
        if(err) throw err;
        res.json(results);
    });
});

app.post('/countries/:id', (req, res) => {
    const id = req.params.id;
    db.query('SELECT name FROM countries WHERE id = ?', [id], (error, results) => {
        if (error) throw error;
        res.json(results[0]);
      });
  });

  app.post('/collages/:id', (req, res) => {
    db.query('SELECT * FROM collages WHERE countries_id = ? ', [req.params.id], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        return res.json({
          success: 1,
          message: "Collage data",
          details: result
        });
      }
    });
  });



  



  app.get('/courses', (req,res) =>{
    const data = 'SELECT * FROM courses';
    
    db.query(data, (error, results) => {
      if (error) throw error;
      res.json(results);
    });
  })

  
  app.get('/coursecollages/:id', (req,res) => {
    db.query('SELECT * FROM coursecollages WHERE courses_id = ? ', [req.params.id], (err, results)=>{
        if (err) throw err;
        res.json(results);
    })  
 
  })

  app.post('/formdata', (req, res) => {
    const { name, email, dob, course_id, college_id } = req.body;
  
    // Validate input data length
    if (name.length === 0 || email.length === 0 || dob.length === 0 || course_id.length === 0 || college_id.length === 0) {
      return res.status(400).json({ error: 'Please provide all the required form data' });
    }
  
    // Insert form data into the database
    const query = `INSERT INTO form_data (name, email, dob, course_id, college_id) VALUES (?, ?, ?, ?, ?)`;
    db.query(query, [name, email, dob, course_id, college_id], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred' });
      } else {
        res.json({ message: 'Form data added successfully' });
      }
    });
  });


//   app.post('/formdata', (res, req) => {
//     // const { name, email, dob, course_id, college_id } = req.body;

//     // const name = req.body.name,
//     const data = [{
//         name: req.body.name,
//         email: req.body.email,
//         dob: req.body.dob,
//         course_id: req.body.courseId,
//         college_id: req.body.collegeId
//     }
//     ]
//     // if (name.length === 0 || email.length === 0 || dob.length === 0 || course_id.length === 0 || college_id.length === 0) {
//     //     return res.status(400).json({ error: 'Please provide all the required form data' });
//     //   }
  
//     // Insert form data into the database
//     // const query = `INSERT INTO form_data SET ? (name, email, dob, course_id, college_id) VALUES (?, ?, ?, ?, ?)`;
//     db.query("INSERT INTO form_data SET ? ", (data), (err, result) => {
//       if (err) {
//         console.error(err);
//         res.status(500).json({ error: 'An error occurred' });
//       } else {
//         res.json({ message: 'Form data added successfully' });
//       }
//     });
//   });






  
 

  app.post('/addcollages', (req, res) => {
    const data = {
        name: req.body.name,
        countries_id: req.body.countries_id
    };

    db.query("INSERT INTO collages SET ?", data, (err, result) => {
        if (err) {
            console.log(err);
            return res.json({
                success: 0,
                message: "An error occurred"
            });
        }
        
        return res.json({
            success: 1,
            message: "collages added"
        });
    });
});

// app.delete('/deletecollages/:id', (req, res) => {
//     const { id } = req.params;
//     const sql = 'DELETE FROM collages WHERE id = ?';
//     db.query(sql, [id], (err, result) => {
//       if (err) throw err;
//       res.json(result);
//       console.log("deleted");
//     });
//   });
  
app.delete('/deletecollage/:id', (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM collages WHERE id=?", id, (err, result) => {
        if (err) { console.log(err) } else {
            return res.json({
                success: 1,
                message: "deleted."
            })
        }
    })
})


app.get('/getuser', (req, res) => {
    db.query('SELECT name FROM login WHERE id = ?', [req.params.id], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Unable to retrieve user data' });
      } else {
        const userName = results[0]?.name;
        res.json({ name: userName });
      }
    });
  });





  app.get('/manageuser', (req,res) => {
    db.query('SELECT * FROM login', (error, results) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error retrieving data from database');
          } else {
            res.json(results);
          }
});
});

app.delete('/delete/:id', (req, res) => {
    const id = parseInt(req.params.id);
  
    // Delete user from the database
    const query = 'DELETE FROM login WHERE id = ?';
    db.query(query, [id], (error, results) => {
      if (error) {
        console.error('Error deleting user: ', error);
        res.sendStatus(500);
        return;
      }
      if (results.affectedRows === 0) {
        res.sendStatus(404);
        return;
      }
      res.sendStatus(204);
    });
  });
  
  
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
  
    // Fetch user data based on the ID from the MySQL database
    const query = 'SELECT * FROM login WHERE id = ?';
    db.query(query, [id], (error, results) => {
      if (error) {
        console.error('Error fetching user data: ', error);
        res.sendStatus(500); // Send a server error status code (500 Internal Server Error)
        return;
      }
  
      if (results.length === 0) {
        res.sendStatus(404); // Send a not found status code (404 Not Found) if user is not found
        return;
      }
  
      const user = results[0];
      res.json(user);
    });
  });

  app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email, phoneno, age, gender, dob, city, state, country, nationality } = req.body;

  // Update user in the database
  const query = 'UPDATE login SET name = ?, email = ?, phoneno = ?, age = ?,  gender = ?, dob = ?, city = ?, state = ?, country = ?, nationality = ? WHERE id = ?';
  db.query(query, [name, email, phoneno, age, gender, dob, city, state, country, nationality, id], (error, results) => {
    if (error) {
      console.error('Error updating user: ', error);
      res.sendStatus(500); 
      return;
    }
    if (results.affectedRows === 0) {
      res.sendStatus(404); 
      return;
    }
    res.sendStatus(200); 
  });
});

app.delete('/deletecourse/:id', (req, res) => {
    const id = parseInt(req.params.id);
  
    // Delete user from the database
    const query = 'DELETE FROM courses WHERE id = ?';
    db.query(query, [id], (error, results) => {
      if (error) {
        console.error('Error deleting cours: ', error);
        res.sendStatus(500);
        return;
      }
      if (results.affectedRows === 0) {
        res.sendStatus(404);
        return;
      }
      res.sendStatus(204);
    });
  });
  

  app.delete('/deletecountry/:id', (req, res) => {
    const id = parseInt(req.params.id);
  
    // Delete user from the database
    const query = 'DELETE FROM countries WHERE id = ?';
    db.query(query, [id], (error, results) => {
      if (error) {
        console.error('Error deleting cours: ', error);
        res.sendStatus(500);
        return;
      }
      if (results.affectedRows === 0) {
        res.sendStatus(404);
        return;
      }
      res.sendStatus(204);
    });
  });
  

app.post('/countryclg' , (req,res)=>{
    const data = [{
        country_id : req.body.country_id ,
        college_id:req.body.college_id
    }];
    db.query('INSERT INTO  countrycollege SET ? ', data , (err,result)=>{
        if(err){
            console.log(err)
        }else{
            return res.json({
                success : 1 , 
                message : "Added Successfully"
            })
        }
    })
})

app.post('/clgcountr' , (req,res)=>{
    const country_id = req.body.country_id ;
    db.query("SELECT * FROM countrycollege WHERE country_id = ? " , country_id , (err,result) =>{
        if(err){
            console.log(err)
        }else{
            return res.json({
                success : 1 , 
                message : "Country ID",
                data :result
            })
        }
    })
})

app.get('/clg/:id' , (req,res)=>{
    const id = req.params.id ;
    db.query("SELECT * FROM collages WHERE id = ? " , id , (err,result) =>{
        if(err){
            console.log(err)
        }else{
            return res.json({
                success :  1, 
                message : "Clg Data By ID ",
                data : result
            })
        }
    });
});

app.post('/clgbycountry' , (req,res)=>{
    const countries_id = req.body.countries_id ;
    db.query('SELECT * FROM collages WHERE countries_id = ? ',countries_id , (err,result)=>{
        if(err){
            console.log(err)
        }else{
            return res.json({
                success : 1 ,
                message : "Countr By Clg Data" ,
                 data : result
            })
        }
    })
})



//colleges//
//
//
//
//
////////////
app.get('/gercolleges', (req, res)=>{
    db.query('SELECT * FROM gercolleges', (err, results)=>{
        if(err) throw err;
        res.json(results);
    });
});

app.get('/fracolleges', (req, res)=>{
    db.query('SELECT * FROM fracolleges', (err, results)=>{
        if(err) throw err;
        res.json(results);
    });
});

app.get('/itacolleges', (req, res)=>{
    db.query('SELECT * FROM itacolleges', (err, results)=>{
        if(err) throw err;
        res.json(results);
    });
});

app.get('/auscolleges', (req, res)=>{
    db.query('SELECT * FROM auscolleges', (err, results)=>{
        if(err) throw err;
        res.json(results);
    });
});

app.get('/newcolleges', (req, res)=>{
    db.query('SELECT * FROM newcolleges', (err, results)=>{
        if(err) throw err;
        res.json(results);
    });
});

app.get('/ukcolleges', (req, res)=>{
    db.query('SELECT * FROM ukcolleges', (err, results)=>{
        if(err) throw err;
        res.json(results);
    });
});

app.get('/usacolleges', (req, res)=>{
    db.query('SELECT * FROM usacolleges', (err, results)=>{
        if(err) throw err;
        res.json(results);
    });
});

app.get('/cancolleges', (req, res)=>{
    db.query('SELECT * FROM cancolleges', (err, results)=>{
        if(err) throw err;
        res.json(results);
    });
});




app.post('/contact', (req,res)=>{
    const data = [{ 
        fullname: req.body.fullname,
        email: req.body.email,
        phoneno: req.body.phoneno,
        message: req.body.message
    }
       
    ]
    db.query('INSERT INTO contact SET ?', (data), (error, result)=>
    {
        if(error) throw error;
        else{
            return res.json({
                success: 1,
                message: "successfully"
            })
        }
    } )
})

app.listen(5000, () => {
    console.log("welcome");
})