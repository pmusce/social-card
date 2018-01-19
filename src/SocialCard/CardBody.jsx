import React from 'react'

const CardBody = ({ title, children }) => (
  <div className="card-body">
    <h4>{title}</h4>
    <p>{children}</p>
  </div>
)

export default CardBody
