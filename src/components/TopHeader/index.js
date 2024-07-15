import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import ModeContext from '../../context/LanguageContext'
import {
  ProfileImage,
  PopContainer,
  CancelButton,
  LogoutButton,
  TopContainerHeader,
  Container,
  MoonIcon,
} from './styledComponents'

class TopHeader extends Component {
  logoutButton = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    return (
      <ModeContext.Consumer>
        {value => {
          const {isDark, changeMode} = value
          const change = () => {
            changeMode()
          }
          const moonColor = isDark ? '#ffffff' : ' #0f0f0f'
          const bgColour = isDark ? '#0f0f0f' : '#ffffff'

          return (
            <TopContainerHeader color={bgColour}>
              <Container>
                <li key="moonIcon">
                  {' '}
                  <MoonIcon onClick={change} data-testid="theme">
                    <FaMoon style={{color: moonColor}} />
                  </MoonIcon>
                </li>
                <li key="profileImage">
                  {' '}
                  <ProfileImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </li>
                <li key="logout">
                  <Popup
                    modal
                    trigger={<LogoutButton type="button">Logout</LogoutButton>}
                  >
                    {close => (
                      <PopContainer>
                        <p>Are you sure, you want to logout</p>
                        <div>
                          <CancelButton
                            type="button"
                            onClick={() => close()}
                            color="#94a3b8"
                          >
                            Cancel
                          </CancelButton>
                          <CancelButton
                            bgColor="#4f46e5"
                            color=" #f9f9f9"
                            type="button"
                            onClick={this.logoutButton}
                          >
                            Confirm
                          </CancelButton>
                        </div>
                      </PopContainer>
                    )}
                  </Popup>
                </li>
              </Container>
            </TopContainerHeader>
          )
        }}
      </ModeContext.Consumer>
    )
  }
}

export default withRouter(TopHeader)
