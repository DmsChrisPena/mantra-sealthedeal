import React from 'react';

class Register extends React.Component {
  render() {
    console.log(this.props);
    const {error} = this.props;
    return (
      <div>
        <h4>Register</h4> <br />
        {error ? <p style={{color: 'red'}}>{error}</p> : null}
        <form onSubmit={this.register.bind(this)}>
          <input placeholder="email" ref="email" /> <br />
          <input placeholder="password" ref="password" /> <br />
          <input placeholder="confirm password" ref="confirmPassword" /> <br />
          <button type="submit">Register</button>
        </form>
        <a href='/'>Back to Login</a>
      </div>
    );
  }
  register(event) {
    event.preventDefault();
    const {register} = this.props;
    const {email, password, confirmPassword} = this.refs;
    register(email.value, password.value, confirmPassword.value);
  }
}

export default Register;
