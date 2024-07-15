import styled from 'styled-components'

export const ParaCon = styled.div`
  display: flex;
`
export const NameAndSubCont = styled.div`
  margin-left: 10px;
`
export const Name = styled.p`
  margin-top: 0;
  margin-bottom: 0px;
  padding-top: 0px;
  font-family: 'Roboto';
  color: ${props => props.fontColor};
`
export const ProfileContainer = styled.div`
  margin-top: 22px;
  display: flex;
  flex-direction: row;
`
export const ProfileImage = styled.img`
  width: 60px;
`
export const Heading = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 400;
  color: ${props => props.fontColor};
`
export const LikeCountContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #475569;
  color: #475569;
`
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 250px;
`
export const ButtonName = styled.p`
  font-size: 16px;
  color: #475569s;
  margin-left: 5px;
`
export const Button = styled.button`
  border: 0px;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 22px;
  color: ${props => props.color};
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 55vh;
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.con};
`

export const VideoContainer = styled.div`
  padding: 60px;
  flex-grow: 1;
  width: 82.6vw;
  background-color: ${props => props.con};
`
