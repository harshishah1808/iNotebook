import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "",password: ""});
    let navigate=useNavigate();

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
      };

    const handleClick=async (e)=>{
        e.preventDefault();
        const url="http://localhost:5000/api/auth/login";
        const response = await fetch(url, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({email: credentials.email,password: credentials.password})
        });
        const json=await response.json();

        if(json.success)
        {
            // save the auth token and redirect
            localStorage.setItem('token',json.authToken);
            props.showAlert("Logged In successfully","success");
            navigate("/");
        }
        else{
            props.showAlert("Invalid Credentials","danger");
        }
    }

  return (
    <div className="mt-2">
        <h2>Login to continue to iNotebook</h2>
        <form onSubmit={handleClick}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onChange} value={credentials.email} style={{border: "2px solid lightblue"}}/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" name="password" id="password" onChange={onChange} value={credentials.password} style={{border: "2px solid lightblue"}}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Login