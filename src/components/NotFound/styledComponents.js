import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.bgColour};
`

export const HomeCon = styled.div`
  width: 100vw;
`
export const Para = styled.p`
  color: ${props => props.fontColor};
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 300;
  margin: 3px;
`
export const Heading = styled.h1`
  color: ${props => props.fontColor};
  font-size: 22px;
  font-family: 'Roboto';
  margin: 0px;
  padding: 0px;
`
export const Image = styled.img`
  width: 400px;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => props.bgColour};
`
