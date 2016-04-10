import React from 'react';

const Login = ({error, login}) => (
  <div>
  	<p style={{color: 'red'}}>{error ? error : null}</p>
    Login <br />
    <form onSubmit={login}>
    	<input placeholder="email" id="email" /> <br />
    	<input placeholder="password" id="password" /> <br />
    	<button type="submit">Login</button>
    </form>
    <a href='/register'>Back to Register</a>
  </div>
);

export default Login;
