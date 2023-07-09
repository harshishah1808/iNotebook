import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = (props) => {
    const [credentials, setCredentials] = useState({name:"",email: "",password: "", cpassword: ""});
    let navigate=useNavigate();

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
      };

    const handleClick=async (e)=>{
        e.preventDefault();
        const url="http://localhost:5000/api/auth/createuser";
        const {name,email,password}=credentials
        const response = await fetch(url, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({name,email,password})
        });
        const  json=await response.json();
        
        if(json.success)
        {
            // save the auth token and redirect
            localStorage.setItem('token',json.authToken);
            navigate("/");
            props.showAlert("Account created successfully","success");
        }
        else{
            props.showAlert("Invalid Details","danger");
        }
    }
    
  return (
    <div className="mt-2">
        <h2>Sign Up to use iNotebook</h2>
        <form className="my-3" onSubmit={handleClick}>
            <div className="my-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name="name" onChange={onChange} aria-describedby="emailHelp" style={{border: "2px solid lightblue"}}/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp" style={{border: "2px solid lightblue"}}/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password" minLength={5} onChange={onChange} style={{border: "2px solid lightblue"}} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="cpassord" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="cpassword" name="cpassword" minLength={5} onChange={onChange} style={{border: "2px solid lightblue"}} required/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default SignUp