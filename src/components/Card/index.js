import {Link} from 'react-router-dom'

import ModeContext from '../../context/LanguageContext'
import {
  CardContainer,
  TitleContainer,
  Title,
  ImageLogo,
  Container,
  Name,
  Image,
} from './styledComponent'

const Card = props => {
  const {
    d,
    cardWidth,
    cardHeight,
    fontSize,
    fontWeight,
    showLogo,
    eachItem,
  } = props
  const {
    publishedAt,
    name,
    profileImageUrl,
    thumbnailUrl,
    title,
    id,
    viewCount,
  } = eachItem
  return (
    <ModeContext.Consumer>
      {value => {
        const {isDark} = value
        const fontColor = isDark ? '#f1f5f9' : '#231f20'
        return (
          <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
            <CardContainer
              direction={d}
              cardHeight={cardHeight}
              cardWidth={cardWidth}
            >
              <Image src={thumbnailUrl} alt="video thumbnail" />
              <TitleContainer>
                {showLogo && (
                  <ImageLogo src={profileImageUrl} alt="channel logo" />
                )}
                <div>
                  <Title
                    key="title"
                    fontSize={fontSize}
                    fontWeight={fontWeight}
                    fontColor={fontColor}
                  >
                    {title}
                  </Title>
                  <Name key="name">{name}</Name>
                  <Container>
                    <Name fontColor={fontColor} key="view_count">
                      {viewCount} views .
                    </Name>
                    <Name fontColor={fontColor} key="published_at">
                      {publishedAt}
                    </Name>
                  </Container>
                </div>
              </TitleContainer>
            </CardContainer>
          </Link>
        )
      }}
    </ModeContext.Consumer>
  )
}

export default Card
