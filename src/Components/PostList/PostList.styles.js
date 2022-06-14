import styled from 'styled-components/native'

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const postCard = styled.TouchableOpacity`
width: 200px;
height: 50px;
margin: 5px;
background-color: #e1e1e1;
justify-content: center;
align-items: center;
border-radius: 3px;
elevation: 4;
`

export const postText = styled.Text`
font-weight: bold;
font-size: 18px;
color: #545454

`

export const SearchNameInput = styled.TextInput`
  margin-top: 10px;
  border: 1px solid #000;
  border-radius: 3px;
  padding: 3px;
`
