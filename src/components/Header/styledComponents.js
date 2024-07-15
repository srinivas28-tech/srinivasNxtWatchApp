import styled from 'styled-components'

export const Logo = styled.img`
  width: 30px;
  margin-right: 12px;
`
export const ContactHeading = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  color: ${props => props.color};
`
export const HomeIcon = styled.label`
  color: ${props => props.color};
  font-size: 18px;
  margin-right: 16px;
`
export const Container = styled.button`
  background-color: ${props => props.bgColor};
  padding-left: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 220px;
  border: 0px;
  cursor: pointer;
`
export const Heading = styled.h1`
  font-size: 17px;
  font-weight: 400;

  color: ${props => props.color};
`
export const HeaderContainer = styled.div`
  background-color: ${props => props.bgColour};
  width: 220px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 12px;
`
export const ImageLogo = styled.img`
  width: 140px;
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`
