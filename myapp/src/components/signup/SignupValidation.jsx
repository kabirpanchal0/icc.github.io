function Validation(values) {
    alert("");
    let error = {}
    if(values.name === ""){
        error.name = "Name shouldn't be empty"
    }
    else {
        error.name = "";
    }
    if(values.email === ""){
        error.email = "Email shouldn't be empty";
    }
    else{
        error.email="";
    }
    if(values.password === ""){
        error.password = "password shouldn't be empty";
    }
    else{
        error.password="";
    }
    return error;
} 

export default Validation