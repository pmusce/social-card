import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  min-width: 300px;
  max-width: 400px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  background-color: #ffffff;
  color: #000000;
  overflow: hidden;
  box-shadow: 2px 2px 2px #ddd;
  margin: 20px 5px;

  & > *:not(:last-child) {
    border-bottom: 1px solid #cccccc;
  }
`

const SocialCard = ({ children }) => <Container>{children}</Container>

export default SocialCard
