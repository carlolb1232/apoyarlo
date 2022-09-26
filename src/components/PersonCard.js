import React, { Component } from 'react'

class PersonCard extends Component {
  render() {
    const { fisrtName, lastName, age, hairColor } = this.props;
    return (
      <>
      <h1>{ lastName }, { fisrtName }</h1>
      <p>
        Age: { age }
      </p>
      <p>
        Hair Color: { hairColor }
      </p>
      </>
    )
  }
}

export default PersonCard;