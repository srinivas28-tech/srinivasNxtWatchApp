import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  Container,
  UserInput,
  ImageLogo,
  CardContainer,
  Label,
  InputContainer,
  ImageContainer,
  Button,
} from './styledComponents'

class Login extends Component {
  state = {checkPassword: false, errMsg: ' ', username: '', password: ''}

  checkBox = () => {
    this.setState(prev => ({checkPassword: !prev.checkPassword}))
  }

  password = event => {
    this.setState({password: event.target.value})
  }

  username = event => {
    this.setState({username: event.target.value})
  }

  onFailure = err => {
    this.setState({errMsg: err})
  }

  onSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 3, path: '/'})
    const {history} = this.props
    history.replace('/')
  }

  validUser = async () => {
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const option = {
      method: 'POST',
      body: JSON.stringify({username, password}),
    }
    const response = await fetch(url, option)
    const responseData = await response.json()
    if (response.ok) {
      this.onSuccess(responseData.jwt_token)
    } else {
      this.onFailure(responseData.error_msg)
    }
  }

  submit = event => {
    event.preventDefault()
    this.validUser()
  }

  render() {
    const {checkPassword, errMsg, username, password} = this.state
    const type = checkPassword ? 'text' : 'password'
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <Container>
        <CardContainer>
          <div>
            <ImageContainer>
              <ImageLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="website logo"
              />
            </ImageContainer>
            <form onSubmit={this.submit}>
              <InputContainer>
                <Label htmlFor="user">USERNAME</Label> <br />
                <UserInput
                  id="user"
                  type="text"
                  placeholder="rahul"
                  value={username}
                  onChange={this.username}
                />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="password">PASSWORD</Label> <br />
                <UserInput
                  id="password"
                  type={type}
                  placeholder="rahul@2021"
                  onChange={this.password}
                  value={password}
                />
              </InputContainer>
              <InputContainer>
                <input id="show" type="checkbox" onChange={this.checkBox} />
                <Label htmlFor="show">Show Password</Label>
              </InputContainer>
              <div>
                <Button type="submit">Login</Button>
              </div>
              <p>{errMsg}</p>
            </form>
          </div>
        </CardContainer>
      </Container>
    )
  }
}

export default Login
