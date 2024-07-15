import styled from 'styled-components'

export const Name = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  margin-bottom: 0px;
  color: ${props => props.fontColor};
`
export const View = styled.p`
  margin: 0;
  padding: 0;
  font-family: 'Roboto';
  color: ${props => props.fontColor};
`
export const Card = styled.li`
  margin-bottom: 26px;
  margin-right: 16px;
  padding: 30px;
`
export const CardContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0px;
  background-color: ${props => props.bgColour};
`
export const Image = styled.img`
  height: 250px;
  width: 200px;
`
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #f1f1f1;
  height: 120px;
  background-color: ${props => props.bgColour};
  padding: 10px 10px 10px 30px;
`
export const Heading = styled.h1`
  font-weight: 400;
  color: ${props => props.fontColor};
  font-family: 'Roboto';
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 55vh;
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
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.con};
`
export const GamingCon = styled.div`
  width: 100vw;
`
