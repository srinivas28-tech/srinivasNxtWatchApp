import styled from 'styled-components'

export const CancelButton = styled.button`
  width: 120px;
  height: 30px;
  border-radius: 8px;
  color: ${props => props.color};
  border: 0px;
  margin-left: 12px;
  background-color: ${props => props.bgColor};
  font-family: 'Roboto';
  cursor: pointer;
  font-size: 16px;
`
export const PopContainer = styled.div`
  background-color: #f9f9f9;
  border-radius: 12px;
  width: 340px;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const MoonIcon = styled.button`
  font-size: 25px;
  border: 0px;
  background-color: transparent;
  cursor: pointer;
`
export const TopContainerHeader = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0px;
  padding: 12px;
  background-color: ${props => props.color};
`
export const Container = styled.ul`
  width: 350px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
  padding-left: 0px;
  padding-right: 20px;
`
export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
`
export const LogoutButton = styled.button`
  width: 120px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid #4f46e5;
  color: #4f46e5;
  font-family: 'Roboto';
  cursor: pointer;
  font-size: 16px;
`
