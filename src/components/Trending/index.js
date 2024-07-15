import {Component} from 'react'
import Cookies from 'js-cookie'
import {FaFireAlt} from 'react-icons/fa'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import TopHeader from '../TopHeader'
import Card from '../Card'
import FailureView from '../FailureView'
import ModeContext from '../../context/LanguageContext'

import {
  HeaderContainer,
  TrendingCon,
  LoaderContainer,
  Container,
  Heading,
  CardContainer,
  HomeIcon,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {apiStatus: apiStatusConstants.initial, Data: []}

  componentDidMount = () => {
    this.fetchData()
  }

  loader = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ff0b37" height="50" width="50" />
    </LoaderContainer>
  )

  card = () => {
    const {Data} = this.state
    return (
      <ModeContext.Consumer>
        {value => {
          const {isDark} = value
          const bgColour = isDark ? '#0f0f0f' : '#f9f9f9'
          return (
            <CardContainer bgColour={bgColour}>
              {Data.map(eachItem => (
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
          )
        }}
      </ModeContext.Consumer>
    )
  }

  fetchData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const url = `https://apis.ccbp.in/videos/trending`

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
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
        name: eachItem.channel.name,
        profileImageUrl: eachItem.channel.profile_image_url,
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

  failureView = () => <FailureView />

  view = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.card()
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
              <Header home="trending" />
              <TrendingCon>
                <TopHeader />
                <Container bgColour={bgColour}>
                  <HomeIcon con={con}>
                    <FaFireAlt />
                  </HomeIcon>
                  <Heading fontColor={fontColor}>Trending</Heading>
                </Container>
                {this.view()}
              </TrendingCon>
            </HeaderContainer>
          )
        }}
      </ModeContext.Consumer>
    )
  }
}

export default Trending
