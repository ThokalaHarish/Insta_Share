import {Component} from 'react'

import './index.css'
import {from} from 'array-flatten'

class LoginForm extends Component {
  renderLoginForm = () => (
    <from className="login-form-container">
      <div className="form-logo-container">
        <img
          src="https://res.cloudinary.com/ths-company/image/upload/v1680116030/Group_1_chgt0g.png"
          alt="website logo"
          className="website-logo"
        />
        <h1 className="logo-heading">Insta Share</h1>
      </div>
      <label className="label-title" htmlFor="username">
        USERNAME
      </label>
      <input
        type="text"
        className="input"
        id="username"
        placeholder="USERNAME"
      />
      <label className="label-title" htmlFor="password">
        PASSWORD
      </label>
      <input
        type="password"
        className="input"
        id="password"
        placeholder="PASSWORD"
      />
      <button className="button" type="submit">
        Login
      </button>
    </from>
  )

  render() {
    return (
      <div className="login-container">
        <img
          src="https://res.cloudinary.com/ths-company/image/upload/v1680113819/OBJECTS_quzbcc.png"
          alt="websiteLogo"
          className="loginImg"
        />
        {this.renderLoginForm()}
      </div>
    )
  }
}
export default LoginForm
