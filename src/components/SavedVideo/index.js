import {Component} from 'react'
import {BsCollectionPlay} from 'react-icons/bs'
import Header from '../Header'
import TopHeader from '../TopHeader'
import Card from '../Card'
import ModeContext from '../../context/LanguageContext'

import {
  HeaderContainer,
  FailureContainer,
  Para,
  Heading,
  Image,
  CardContainer,
  Container,
  HomeIcon,
  SaveCon,
} from './styledComponents'

class SavedVideo extends Component {
  noVideo = () => (
    <ModeContext.Consumer>
      {value => {
        const {isDark} = value
        const bgColour = isDark ? '#0f0f0f' : '#ffffff'
        const fontColor = isDark ? '#f1f5f9' : '#0f0f0f'
        return (
          <FailureContainer bgColour={bgColour}>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <Heading fontColor={fontColor}>No saved videos found</Heading>
            <Para fontColor={fontColor}>
              You can save your videos while watching them
            </Para>
          </FailureContainer>
        )
      }}
    </ModeContext.Consumer>
  )

  card = () => (
    <ModeContext.Consumer>
      {value => {
        const {isDark, savedList} = value
        const fontColor = isDark ? '#f1f5f9' : '#231f20'
        const bgColor = isDark ? '#212121' : '#f1f1f1'
        const con = isDark ? '#0f0f0f' : '#f9f9f9'
        const bgColour = isDark ? '#0f0f0f' : '#f9f9f9'
        return (
          <div>
            <Container bgColour={bgColor}>
              <HomeIcon con={con}>
                <BsCollectionPlay />
              </HomeIcon>
              <Heading fontColor={fontColor}>Saved Videos</Heading>
            </Container>
            <CardContainer bgColour={bgColour}>
              {savedList.map(eachItem => (
                <li key={eachItem.id}>
                  <Card
                    eachItem={eachItem}
                    fontSize="20px"
                    fontWeight="350"
                    d="row"
                    showLogo={false}
                    cardWidth="650px"
                    cardHeight="200px"
                  />
                </li>
              ))}
            </CardContainer>
          </div>
        )
      }}
    </ModeContext.Consumer>
  )

  render() {
    return (
      <ModeContext.Consumer>
        {value => {
          const {isDark, savedList} = value
          const bgColour = isDark ? '#0f0f0f' : '#ffffff'
          return (
            <HeaderContainer bgColour={bgColour}>
              <Header home="saved" />
              <SaveCon>
                <TopHeader />
                {savedList.length === 0
                  ? this.noVideo()
                  : this.card(savedList, bgColour)}
              </SaveCon>
            </HeaderContainer>
          )
        }}
      </ModeContext.Consumer>
    )
  }
}

export default SavedVideo
