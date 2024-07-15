import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import TopHeader from '../TopHeader'
import FailureView from '../FailureView'
import ModeContext from '../../context/LanguageContext'

import {
  Card,
  View,
  HeaderContainer,
  Image,
  LoaderContainer,
  Container,
  CardContainer,
  Heading,
  Name,
  HomeIcon,
  GamingCon,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    Data: [],
  }

  componentDidMount = () => {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const url = `https://apis.ccbp.in/videos/gaming`

    const jwtToken = Cookies.get('jwt_token')

    const option = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, option)
    if (response.ok) {
      const responseData = await response.json()
      const Data = responseData.videos.map(eachItem => ({
        id: eachItem.id,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        Data,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  loader = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ff0b37" height="50" width="50" />
    </LoaderContainer>
  )

  card = (eachItem, fontColor) => {
    const {thumbnailUrl, id, title, viewCount} = eachItem

    return (
      <Card key={id}>
        <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
          <Image src={thumbnailUrl} alt="video thumbnail" />
          <Name fontColor={fontColor}>{title}</Name>
          <View fontColor={fontColor}>{viewCount} Watching Worldwide</View>
        </Link>
      </Card>
    )
  }

  cardContainer = () => {
    const {Data} = this.state
    return (
      <ModeContext.Consumer>
        {value => {
          const {isDark} = value
          const bgColour = isDark ? '#0f0f0f' : '#f9f9f9'
          const fontColor = isDark ? '#f1f5f9' : '#231f20'
          return (
            <CardContainer bgColour={bgColour}>
              {Data.map(eachItem => this.card(eachItem, fontColor))}
            </CardContainer>
          )
        }}
      </ModeContext.Consumer>
    )
  }

  onFailure = () => {
    this.fetch()
  }

  failureView = () => <FailureView onFailure={this.onFailure} />

  view = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.cardContainer()
      case apiStatusConstants.failure:
        return this.failureView()
      case apiStatusConstants.inProgress:
        return this.loader()
      default:
        return null
    }
  }

  render() {
    return (
      <ModeContext.Consumer>
        {value => {
          const {isDark} = value
          const fontColor = isDark ? '#f1f5f9' : '#231f20'
          const bgColour = isDark ? '#212121' : '#f1f1f1'
          const con = isDark ? '#0f0f0f' : '#f9f9f9'
          return (
            <HeaderContainer con={con}>
              <Header home="gaming" />
              <GamingCon>
                <TopHeader />
                <Container bgColour={bgColour}>
                  <HomeIcon con={con}>
                    <SiYoutubegaming />
                  </HomeIcon>
                  <Heading fontColor={fontColor}>Gaming</Heading>
                </Container>
                {this.view()}
              </GamingCon>
            </HeaderContainer>
          )
        }}
      </ModeContext.Consumer>
    )
  }
}

export default Gaming
