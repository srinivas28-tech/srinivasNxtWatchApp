import {Component} from 'react'
import Cookies from 'js-cookie'
import {BiDislike} from 'react-icons/bi'
import {AiOutlineLike} from 'react-icons/ai'
import {BsCollectionPlay} from 'react-icons/bs'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import TopHeader from '../TopHeader'
import FailureView from '../FailureView'
import ModeContext from '../../context/LanguageContext'
import {
  HeaderContainer,
  ProfileContainer,
  ProfileImage,
  ButtonContainer,
  ButtonName,
  Name,
  Button,
  ParaCon,
  LikeCountContainer,
  LoaderContainer,
  Heading,
  VideoContainer,
  NameAndSubCont,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    Data: [],
    like: false,
    apiStatus: apiStatusConstants.initial,
    disLike: false,
  }

  componentDidMount = () => {
    this.fetch()
  }

  loader = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ff0b37" height="50" width="50" />
    </LoaderContainer>
  )

  fetch = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
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
      const Data = {
        subscriberCount: responseData.video_details.channel.subscriber_count,
        id: responseData.video_details.id,
        publishedAt: responseData.video_details.published_at,
        thumbnailUrl: responseData.video_details.thumbnail_url,
        title: responseData.video_details.title,
        viewCount: responseData.video_details.view_count,
        name: responseData.video_details.channel.name,
        profileImageUrl: responseData.video_details.channel.profile_image_url,
        videoUrl: responseData.video_details.video_url,
        description: responseData.video_details.description,
        saved: false,
      }
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

  onFailure = () => {
    this.fetch()
  }

  failureView = () => <FailureView onFailure={this.onFailure} />

  view = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.videoDetails()
      case apiStatusConstants.failure:
        return this.failureView()
      case apiStatusConstants.inProgress:
        return this.loader()
      default:
        return null
    }
  }

  videoDetails = () => {
    const {like, disLike, Data} = this.state
    const {
      publishedAt,
      subscriberCount,
      title,
      viewCount,
      name,
      profileImageUrl,
      videoUrl,
      description,
      saved,
      id,
    } = Data
    return (
      <ModeContext.Consumer>
        {value => {
          const {isDark, removeVideo, savedList, saveVideo} = value
          const addToSave = () => {
            const list = {...Data, saved: true}
            this.setState({Data: list})
            saveVideo(list)
          }
          savedList.forEach(each => {
            if (each.id === id && !saved) {
              addToSave()
            }
          })
          const fontColor = isDark ? '#f1f5f9' : '#231f20'
          const con = isDark ? '#0f0f0f' : '#f9f9f9'
          const removeFromSave = () => {
            const list = {...Data, saved: false}
            this.setState({Data: list})
            removeVideo(list)
          }
          const saveButton = () => {
            if (saved) {
              removeFromSave()
            } else {
              addToSave()
            }
          }
          const disLikeButton = () => {
            this.setState(prev => ({disLike: !prev.disLike, like: false}))
          }
          const likeButton = () => {
            this.setState(prev => ({like: !prev.like, disLike: false}))
          }
          const likeColor = like ? '#2563eb' : '#64748b'
          const disLikeColor = disLike ? '#2563eb' : '#64748b'
          const saveButtonColor = saved ? '#2563eb' : '#64748b'
          const saveButtonText = saved ? 'Saved' : 'Save'
          return (
            <VideoContainer con={con}>
              <ReactPlayer url={videoUrl} width="800px" height="400px" />
              <Heading fontColor={fontColor} key="title">
                {title}
              </Heading>
              <LikeCountContainer>
                <ParaCon>
                  <p key="view_count">{viewCount} views .</p>
                  <p key="published_at"> {publishedAt}</p>
                </ParaCon>
                <ButtonContainer>
                  <Button type="button" onClick={likeButton} color={likeColor}>
                    <AiOutlineLike />
                    <ButtonName>Like</ButtonName>
                  </Button>
                  <Button
                    onClick={disLikeButton}
                    type="button"
                    color={disLikeColor}
                  >
                    <BiDislike />
                    <ButtonName>Dislike</ButtonName>
                  </Button>
                  <Button
                    onClick={saveButton}
                    type="button"
                    color={saveButtonColor}
                  >
                    <BsCollectionPlay />
                    <ButtonName>{saveButtonText}</ButtonName>
                  </Button>
                </ButtonContainer>
              </LikeCountContainer>
              <ProfileContainer>
                <div>
                  <ProfileImage src={profileImageUrl} alt="channel logo" />
                </div>
                <NameAndSubCont>
                  <div>
                    <Name fontColor={fontColor} key="name">
                      {name}
                    </Name>
                    <Name fontColor={fontColor}>
                      {subscriberCount} subscribers
                    </Name>
                  </div>
                  <Name fontColor={fontColor}>{description}</Name>
                </NameAndSubCont>
              </ProfileContainer>
            </VideoContainer>
          )
        }}
      </ModeContext.Consumer>
    )
  }

  render() {
    return (
      <ModeContext.Consumer>
        {value => {
          const {isDark} = value
          const con = isDark ? '#0f0f0f' : '#f9f9f9'
          return (
            <HeaderContainer con={con}>
              <Header />
              <div>
                <TopHeader />
                {this.view()}
              </div>
            </HeaderContainer>
          )
        }}
      </ModeContext.Consumer>
    )
  }
}

export default VideoItemDetails
