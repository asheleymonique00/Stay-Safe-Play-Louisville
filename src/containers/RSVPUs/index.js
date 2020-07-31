import React, { Component } from 'react';
import Card from '../../components/UI/Card';

/**
* @author
* @function RSVPUs
**/

// const RSVPUs = (props) => {
//   return(
//     <div>RSVPUs</div>
//    )

//  }

// export default RSVPUs

class RSVPUs extends Component {
  constructor(props) {
      super(props)
      
      this.state = {
          username: "",
          password: ""
      }
  }

  handleChange = (e) => {
      this.setState({
         [e.target.name]: e.target.value
      })
     
  }

  render() {
      return (
          <Card>
          <form onSubmit={(e) => this.props.handleSubmit(e, this.state)}>
              <h2>Choose your Staycation Destintation</h2>
              <label for="StaycationDest">Staycation Adventures:</label>
                <select name="staycations" id="staycations">
                  <option value="LouisvilleMurals">Louisville Murals Tour</option>
                  <option value="Picnics">Picnics/Outdoors Adventure</option>
                  <option value="Historical">Historical Sites Tour</option>
                  <option value="Bike">Louisville Loop Bike Ride</option>
                </select>
              <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
              <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
              <input type="submit" value="RSVPUs" />
          </form>
          </Card>
      )
  }
}

export default RSVPUs;