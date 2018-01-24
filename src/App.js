import React, { Component } from 'react'
import './App.css'

import { SocialCard, CardHeader, CardBody, CardFooter } from './SocialCard/'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SocialCard>
          <CardHeader
            src="https://image.freepik.com/free-photo/cardboard-wallpaper-template_1194-6785.jpg"
            alt="Cardboard"
          />
          <CardBody title="Cardboard">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            lacus nibh, aliquet eget blandit eget, elementum nec dui. Fusce
            ultrices eros nec magna suscipit, ac lobortis nunc auctor.
          </CardBody>
          <CardFooter />
        </SocialCard>

        <SocialCard>
          <CardHeader
            src="https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5222667836001_5214872539001-vs.jpg?pubId=5104226627001&videoId=5214872539001"
            alt="Morocco"
          />
          <CardBody title="Morocco" small="Source: examp.le">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            lacus nibh, aliquet eget blandit eget, elementum nec dui. Fusce
            ultrices eros nec magna suscipit, ac lobortis nunc auctor.
          </CardBody>
          <CardFooter />
        </SocialCard>
      </div>
    )
  }
}

export default App
