import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {IoMdHome} from 'react-icons/io'
import {FaFireAlt} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {BsCollectionPlay} from 'react-icons/bs'
import ModeContext from '../../context/LanguageContext'

import {
  ImageContainer,
  Logo,
  Heading,
  Container,
  HeaderContainer,
  ContactHeading,
  ImageLogo,
  HomeIcon,
} from './styledComponents'

class Header extends Component {
  render() {
    const {home} = this.props
    return (
      <ModeContext.Consumer>
        {value => {
          const {isDark} = value
          const bgColour = isDark ? '#181818' : '#ffffff'
          const websiteLogo = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          /*
          const color = isDark ? '#ffffff' : '#0f0f0f'
*/
          let bgHome = null
          let cl = null
          let bgTrending = null
          let bgGaming = null
          let bgSaved = null
          let fontColorHome = null
          let fontColorTrending = null
          let fontColorGaming = null
          let fontColorSaved = null
          if (isDark) {
            fontColorHome = home === 'Home' ? '#ff0000' : '#cccccc'
            fontColorTrending = home === 'trending' ? '#ff0000' : '#cccccc'
            fontColorGaming = home === 'gaming' ? '#ff0000' : '#cccccc'
            fontColorSaved = home === 'saved' ? '#ff0000' : '#cccccc'
            bgHome = home === 'Home' ? '#606060' : '#181818'
            bgTrending = home === 'trending' ? '#606060' : '#181818'
            bgGaming = home === 'gaming' ? '#606060' : '#181818'
            bgSaved = home === 'saved' ? '#606060' : '#181818'
            cl = '#d7dfe9'
          } else {
            fontColorHome = home === 'Home' ? '#ff0000' : '#212121'
            fontColorTrending = home === 'trending' ? '#ff0000' : '#212121'
            fontColorGaming = home === 'gaming' ? '#ff0000' : '#212121'
            fontColorSaved = home === 'saved' ? '#ff0000' : '#212121'
            bgHome = home === 'Home' ? '#f1f5f9' : '#ffffff'
            bgTrending = home === 'trending' ? '#f1f5f9' : '#ffffff'
            bgGaming = home === 'gaming' ? '#f1f5f9' : '#ffffff'
            bgSaved = home === 'saved' ? '#f1f5f9' : '#ffffff'
            cl = '#0f0f0f'
          }
          return (
            <HeaderContainer bgColour={bgColour}>
              <div>
                <ImageContainer>
                  <Link to="/" style={{textDecoration: 'none'}}>
                    <ImageLogo src={websiteLogo} alt="website logo" />
                  </Link>
                </ImageContainer>
                <Link to="/" style={{textDecoration: 'none'}}>
                  <Container bgColor={bgHome} data-testid="theme">
                    <HomeIcon color={fontColorHome}>
                      <IoMdHome />
                    </HomeIcon>
                    <Heading color={cl}>Home</Heading>
                  </Container>
                </Link>
                <Link to="/trending" style={{textDecoration: 'none'}}>
                  <Container bgColor={bgTrending} data-testid="theme">
                    <HomeIcon color={fontColorTrending}>
                      <FaFireAlt />
                    </HomeIcon>
                    <Heading color={cl}>Trending</Heading>
                  </Container>
                </Link>
                <Link to="/gaming" style={{textDecoration: 'none'}}>
                  {' '}
                  <Container bgColor={bgGaming} data-testid="theme">
                    <HomeIcon color={fontColorGaming}>
                      <SiYoutubegaming />
                    </HomeIcon>
                    <Heading color={cl}>Gaming</Heading>
                  </Container>
                </Link>
                <Link to="/saved-videos" style={{textDecoration: 'none'}}>
                  <Container bgColor={bgSaved} data-testid="theme">
                    <HomeIcon color={fontColorSaved}>
                      <BsCollectionPlay />
                    </HomeIcon>
                    <Heading color={cl}>Saved videos</Heading>
                  </Container>
                </Link>
              </div>
              <div>
                <ContactHeading color={cl}>CONTACT US</ContactHeading>
                <div>
                  <Logo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <Logo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <Logo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png "
                    alt="linked in logo"
                  />
                </div>
                <ContactHeading color={cl}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactHeading>
              </div>
            </HeaderContainer>
          )
        }}
      </ModeContext.Consumer>
    )
  }
}

export default withRouter(Header)
