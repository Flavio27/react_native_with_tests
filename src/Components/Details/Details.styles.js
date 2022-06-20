import styled from 'styled-components/native'

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const Name = styled.Text`
  font-size: 30px;
  font-weight: 700;
  margin: 10px
`

export const Photo = styled.Image`
  width: 250px;
  height: 300px;
  border-radius: 5px;
`

export const DescriptionContainer = styled.View`
  padding: 10px;
  background-color: #e1e1e1;
  border-radius: 5px;
  margin-top: 30px;
  max-width: 90%;
`

export const Description = styled.Text`
  font-size: 14px;
  line-height: 20px;
`
