import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {MdSearch} from 'react-icons/md'
import Header from '../Header'
import TopHeader from '../TopHeader'
import Card from '../Card'
import FailureView from '../FailureView'
import ModeContext from '../../context/LanguageContext'

import {
  LoaderContainer,
  HomeCon,
  HeaderContainer,
  CardContainer,
  SearchButton,
  ImageLogo,
  TopCard,
  Heading,
  GetButton,
  ImageContainer,
  CrossButton,
  SearchContainer,
  VideoContainer,
  FailureContainer,
  HeadingFail,
  Image,
  Para,
  Button,
  SearchInput,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    show: true,
    search: '',
    apiStatus: apiStatusConstants.initial,
    Data: [],
  }

  componentDidMount = () => {
    this.fetchData()
  }

  searchButton = () => {
    this.fetchData()
  }

  search = event => {
    this.setState({search: event.target.value})
  }

  fetchData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {search} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${search}`

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

  crossButton = () => {
    this.setState({show: false})
  }

  loader = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ff0b37" height="50" width="50" />
    </LoaderContainer>
  )

  videoContainer = () => {
    const {search, Data} = this.state
    return (
      <ModeContext.Consumer>
        {value => {
          const {isDark} = value
          const bgColour = isDark ? '#0f0f0f' : '#ffffff'
          const buttonBg = isDark ? '#231f20' : ''
          const fontColor = isDark ? '#f1f5f9' : '#231f20'
          return (
            <VideoContainer bgColour={bgColour}>
              <SearchContainer>
                <SearchInput
                  buttonBg={buttonBg}
                  bgColor={bgColour}
                  type="search"
                  placeholder="search"
                  value={search}
                  onChange={this.search}
                  fontColor={fontColor}
                />
                <SearchButton
                  data-testid="searchButton"
                  type="button"
                  onClick={this.searchButton}
                  buttonBg={buttonBg}
                  fontColor={fontColor}
                >
                  <MdSearch />
                  {}
                </SearchButton>
              </SearchContainer>

              {Data.length === 0 ? (
                this.homeResult()
              ) : (
                <CardContainer>
                  {Data.map(eachItem => (
                    <li key={eachItem.id}>
                      <Card
                        eachItem={eachItem}
                        cardWidth="350px"
                        d="column"
                        fontSize="16px"
                        fontWeight="normal"
                        showLogo
                      />
                    </li>
                  ))}
                </CardContainer>
              )}
            </VideoContainer>
          )
        }}
      </ModeContext.Consumer>
    )
  }

  adCard = () => (
    <TopCard data-testid="banner">
      <ImageContainer>
        <ImageLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <CrossButton
          onClick={this.crossButton}
          type="button"
          data-testid="close"
        >
          X
        </CrossButton>
      </ImageContainer>
      <Heading>Buy Nxt Watch Premium prepaid plans with UPI</Heading>
      <GetButton type="button">GET IT NOW</GetButton>
    </TopCard>
  )

  onFailure = () => {
    this.fetchData()
  }

  failureView = () => <FailureView onFailure={this.onFailure} />

  homeResult = () => (
    <ModeContext.Consumer>
      {value => {
        const {isDark} = value
        const bgColour = isDark ? '#0f0f0f' : '#ffffff'
        const fontColor = isDark ? '#f1f5f9' : '#0f0f0f'

        return (
          <FailureContainer bgColour={bgColour}>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <HeadingFail fontColor={fontColor}>
              No Search results found
            </HeadingFail>
            <Para fontColor={fontColor}>
              Try different key words or remove search filter
            </Para>
            <Button type="button" onClick={this.retry}>
              Retry
            </Button>
          </FailureContainer>
        )
      }}
    </ModeContext.Consumer>
  )

  retry = () => {
    this.fetchData()
  }

  view = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.videoContainer()
      case apiStatusConstants.failure:
        return this.failureView()
      case apiStatusConstants.inProgress:
        return this.loader()
      default:
        return null
    }
  }

  render() {
    const {show} = this.state
    return (
      <ModeContext.Consumer>
        {value => {
          const {isDark} = value
          const bgColour = isDark ? '#181818' : '#ffffff'
          return (
            <HeaderContainer bgColour={bgColour} data-testid="home">
              <Header home="Home" />
              <HomeCon>
                <TopHeader />
                {show && this.adCard()}
                {this.view()}
              </HomeCon>
            </HeaderContainer>
          )
        }}
      </ModeContext.Consumer>
    )
  }
}

export default Home
