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
export const Heading = styled.h1`
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
