import React from 'react'
import styled from 'styled-components'

const CardImage = styled.img`
  position: relative;
  object-fit: cover;
  width: 100%;
  height: 250px;
`

const CardHeader = ({ src, alt }) => <CardImage src={src} alt={alt} />

export default CardHeader
