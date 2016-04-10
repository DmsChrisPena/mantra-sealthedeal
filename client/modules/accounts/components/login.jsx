import React from 'react';

const Login = ({error, login}) => (
  <div>
  	<p>{error ? error : null}</p>
    Login <br />
    <a href='/register'>Back to Register</a>
  </div>
);

export default Login;
