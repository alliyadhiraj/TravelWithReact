import React from "react";

const LoginPage = () => (

    <div className="container">

        <form className="form-control">
            <label className="uname" for='uname'>User Name</label>
            <input type='text' id="Fname" placeholder="First Name"></input>

            <label className="uname" for="password">Password</label>
            <input type='password' id="password" placeholder="Password"></input>

            <button type="submit" id="btn">Submit</button>
        </form>    
       
    </div>
);

export default LoginPage;