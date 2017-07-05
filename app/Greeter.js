import React, { Component } from 'react'
const configure = require('./configure.json')
import './Greeter.css'

class Greeter extends Component {
  render() {
    return (
      <div className="root">
        {configure.greetText}
      </div>
    )
  }
}
export default Greeter
//module.exports = () => {
//  var greet = document.createElement('div')
//  greet.textContent = configure.greetText
//  return greet
//}