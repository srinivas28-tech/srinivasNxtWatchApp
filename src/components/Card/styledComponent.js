import styled from 'styled-components'

export const Name = styled.p`
  color: #475569;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 4px;
  padding-top: 0px;
  color: ${props => props.fontColor};
`
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0px;
`
export const Title = styled.p`
  font-weight: ${props => props.fontWeight};
  font-family:'Roboto'
  padding-bottom:0px;
  margin-top: 0px;
  padding-top: 0px;
  font-size:${props => props.fontSize};
   margin-bottom: 0px;
   color: ${props => props.fontColor};
`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 10px;
`
export const CardContainer = styled.div`
  width: ${props => props.cardWidth};
  height: ${props => props.cardHeight};
  margin-bottom: 20px;
  margin-right: 10px;
  display: flex;
  flex-direction: ${props => props.direction};
  text-decoration: none;
`
export const Image = styled.img`
  width: 343px;
  height: 200px;
`
export const ImageLogo = styled.img`
  width: 50px;
  height: 50px;
  padding-top: 9px;
  margin-right: 11px;
`
