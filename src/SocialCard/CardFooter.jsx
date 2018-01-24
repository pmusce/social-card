import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;

  .card-footer-item {
    padding: 1em;
    text-align: center;
    flex: 1 100%;
    cursor: pointer;
    user-select: none;
  }
  .card-footer-item:hover {
    background-color: #eee;
  }
  .card-footer-item:active {
    background-color: #ddd;
  }
  .card-footer-item:not(:last-child) {
    border-right: 1px solid #cccccc;
  }
`

const CardFooter = () => (
  <Container>
    <div className="card-footer-item">A</div>
    <div className="card-footer-item">B</div>
    <div className="card-footer-item">C</div>
  </Container>
)

export default CardFooter
