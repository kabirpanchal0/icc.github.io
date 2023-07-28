import React from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Adminsidebar from '../sidebar/Adminsidebar';
import Adminnavbar from '../navbar/Adminnavbar';
import { FaWindows } from 'react-icons/fa';


const Edituser = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    // Fetch user data from the API
    axios.get(`http://localhost:5000/users/${id}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => console.log(error));
  }, [id]);

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleEdit = () => {
    axios.put(`http://localhost:5000/users/${id}`, user)
      .then(() => {
        console.log('User updated successfully');
        alert("User updated successfully");
        navigate('/manageuser');
        // Handle any further actions after successful update
      })
      .catch(error => console.log(error));
  };
  return (
    <>
      <div className="manageuser">
        <Adminsidebar />
        <div className='usercontainer'>
          <Adminnavbar />
          <form  onSubmit={handleEdit}>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="phoneno"
              value={user.phoneno}
              onChange={handleInputChange}
            />
             <input
              type="number"
              name="age"
              value={user.age}
              onChange={handleInputChange}
            />
             <input
              type="text"
              name="gender"
              value={user.gender}
              onChange={handleInputChange}
            />
             <input
              type="date"
              name="dob"
              value={user.dob}
              onChange={handleInputChange}
            />
             <input
              type="text"
              name="city"
              value={user.city}
              onChange={handleInputChange}
            />
             <input
              type="text"
              name="state"
              value={user.state}
              onChange={handleInputChange}
            />
             <input
              type="text"
              name="country"
              value={user.country}
              onChange={handleInputChange}
            />
             <input
              type="text"
              name="nationality"
              value={user.nationality}
              onChange={handleInputChange}
            />
           
            <button type='submit' >Save</button>
          </form>
        </div>
      </div>

    </>
  )
}

export default Edituser
