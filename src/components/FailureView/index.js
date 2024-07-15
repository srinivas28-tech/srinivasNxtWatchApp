import {Component} from 'react'
import ModeContext from '../../context/LanguageContext'

import {
  FailureContainer,
  Button,
  Para,
  Heading,
  Image,
} from './styledComponents'

class FailureView extends Component {
  render() {
    const {onFailure} = this.props

    const retry = () => {
      onFailure()
    }

    return (
      <ModeContext.Consumer>
        {value => {
          const {isDark} = value
          const bgColour = isDark ? '#0f0f0f' : '#ffffff'
          const fontColor = isDark ? '#f1f5f9' : '#0f0f0f'
          console.log(bgColour)
          const themeView = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          return (
            <FailureContainer bgColour={bgColour}>
              <Image src={themeView} alt="failure view" />
              <Heading fontColor={fontColor}>
                Oops! Something Went Wrong
              </Heading>
              <Para fontColor={fontColor}>
                We are having some trouble to complete your request.
                <br /> Please try again.
              </Para>
              <Button type="button" onClick={retry}>
                Retry
              </Button>
            </FailureContainer>
          )
        }}
      </ModeContext.Consumer>
    )
  }
}

export default FailureView
