import styled from 'styled-components'

export const CardContainer = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding-left: 0px;
  flex-wrap: wrap;
  padding-top: 20px;
  width: 100%vw;
  background-color: ${props => props.bgColour};
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
export const Heading = styled.h1`
  font-weight: 400;
  font-family: 'Roboto';
  color: ${props => props.fontColor};
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
export const TrendingCon = styled.div`
  width: 100vw;
`
