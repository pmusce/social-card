import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 1em 1.5em;

  h4 {
    margin: 0;
    font-size: 2em;
    font-weight: 600;
  }

  p {
    margin: 0;
  }

  small {
    display: block;
    color: #999;
    font-style: italic;
    margin-top: 0.7em;
  }
`

const CardBody = ({ title, children, small }) => (
  <Container>
    <h4>{title}</h4>
    <p>{children}</p>
    {small ? <small>{small}</small> : ''}
  </Container>
)

export default CardBody
