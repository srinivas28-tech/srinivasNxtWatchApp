import {Component} from 'react'
import Header from '../Header'
import TopHeader from '../TopHeader'
import ModeContext from '../../context/LanguageContext'

import {
  HeaderContainer,
  FailureContainer,
  Para,
  Heading,
  Image,
  HomeCon,
} from './styledComponents'

class NotFound extends Component {
  noVideo = () => (
    <ModeContext.Consumer>
      {value => {
        const {isDark} = value
        const bgColour = isDark ? '#0f0f0f' : '#ffffff'
        const fontColor = isDark ? '#f1f5f9' : '#0f0f0f'
        const url = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        return (
          <FailureContainer bgColour={bgColour}>
            <Image src={url} alt="not found" />
            <Heading fontColor={fontColor}>Page Not Found</Heading>
            <Para fontColor={fontColor}>
              we are sorry, the page you requested could not be found.
            </Para>
          </FailureContainer>
        )
      }}
    </ModeContext.Consumer>
  )

  render() {
    return (
      <ModeContext.Consumer>
        {value => {
          const {isDark} = value
          const bgColour = isDark ? '#0f0f0f' : '#ffffff'
          return (
            <HeaderContainer bgColour={bgColour}>
              <Header />
              <HomeCon>
                <TopHeader />
                {this.noVideo()}
              </HomeCon>
            </HeaderContainer>
          )
        }}
      </ModeContext.Consumer>
    )
  }
}

export default NotFound
