import styled from 'styled-components'

export const Para = styled.p`
  color: ${props => props.fontColor};
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 300;
  margin: 3px;
`
export const Heading = styled.h1`
  color: ${props => props.fontColor};
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

export const HomeIcon = styled.label`
  color: #ff0000;
  font-size: 48px;
  margin-right: 16px;
  background-color: ${props => props.con};
  width: 70px;
  height: 70px;
  border-radius: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.bgColour};
  height: 120px;
  padding: 10px 10px 10px 30px;
  width: 100%vw;
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.bgColour};
`
export const SaveCon = styled.div`
  width: 100vw;
`
export const CardContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-top: 20px;
  margin-top: 0px;
  width: 100%vw;
  background-color: ${props => props.bgColour};
`
