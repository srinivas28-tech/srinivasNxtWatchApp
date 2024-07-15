import styled from 'styled-components'

export const Button = styled.button`
  width: 80px;
  height: 30px;
  color: #f1f5f9;
  background-color: #4f46e5;
  border: 0px;
  border-radius: 2px;
  margin-top: 5px;
  cursor: pointer;
`
export const Para = styled.p`
  color: ${props => props.fontColor};
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 300;
  margin: 3px;
`
export const HeadingFail = styled.h1`
  color: ${props => props.fontColor};
  font-size: 22px;
  font-family: 'Roboto';
  margin: 0px;
  padding: 0px;
`
export const Image = styled.img`
  width: 300px;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => props.bgColour};
`

export const CardContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;
  list-style-type: none;
  padding-left: 0px;
`
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const VideoContainer = styled.div`
  padding: 20px;
  background-color: ${props => props.bgColour};
`
export const SearchButton = styled.button`
  background-color: ${props => props.buttonBg};
  border: 1px solid ${props => props.buttonBg};
  color: ${props => props.fontColor};
  height: 35px;
  width: 70px;
  font-size: 20px;
  cursor: pointer;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 55vh;
`
export const HomeCon = styled.div`
  width: 100vw;
`
export const SearchInput = styled.input`
  background-color: ${props => props.bgColor};
  border: 1px solid ${props => props.buttonBg};
  color: ${props => props.fontColor};
  width: 300px;
  height: 35px;
  font-size: 16px;
  padding-left: 10px;
`
export const TopCard = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png ');
  background-size: cover;
  height: 180px;
  margin: 12px;
  border-radius: 12px;
  padding: 20px;
`
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.bgColour};
`
export const ImageLogo = styled.img`
  width: 120px;
`
export const CrossButton = styled.button`
  border: 0px;
  background-color: transparent;
  cursor: pointer;
`
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const Heading = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const GetButton = styled.button`
  height: 34px;
  background-color: transparent;
  border: 1px solid;
  font-family: 'Roboto';
  font-weight: 500;
`
