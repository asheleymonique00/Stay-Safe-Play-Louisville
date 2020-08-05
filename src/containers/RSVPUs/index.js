import React, { Component } from 'react';
import Card from '../../components/UI/Card';
import './style.css';
/**
* @author
* @function RSVPUs
**/

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
        <div>
          <Card>
            <div className="center">
          <form onSubmit={(e) => this.props.handleSubmit(e, this.state)}>
              <h2>Choose your Staycation Destintation</h2>
              <label for="StaycationDest">Staycation Adventures:</label>
              <br></br>
                <select name="staycations" id="staycations">
                  <option value="LouisvilleMurals">Louisville Murals Tour</option>
                  <option value="Picnics">Picnics and other Outdoor Adventures</option>
                  <option value="Historical">Historical Sites Tours</option>
                  <option value="HistoricalLou">Tour Old Louisville’s historic homes</option>
                  <option value="Bike">Louisville Loop Bike Ride</option>
                  <option value="Zip">Zip line at Louisville Mega Cavern</option>
                </select>
              {/* <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
              <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
              <input type="submit" value="RSVPUs" /> */}
          </form>
          </div>
          </Card>
          <div className="productsList">
            {/* <Card> */}
            <div className="half-card">
            <h2>Louisville Murals Tour</h2>
            <p>
            It features the faces of those killed by police or those who died in police custody like Breonna Taylor, George Floyd, David McAtee, Elijah McClain, and Sandra Bland. 
            The mural also features the words “say their names.” Located at 11th and Main St. This one of many other murals.
            </p>
            <ul>
              <li>African American Children Mural: A mural representing African American children’s hopes and dreams.</li>
              <li>Diversity: This mural represents the diversity of residents around Louisville.</li>
              <li>What We Need Is Here: A beautiful mural representing the connection a mother and child has through breast feasting. Liz Richter’s painting celebrates public breastfeeding to counteract the shame that society puts on breastfeeding publicly.</li>
              <li>Steam Exchange: A mural of different artists that are apart of Steam Exchange. Steam Exchange works towards improving the community by showcasing creativity and leadership through public art to the youth of color.</li>
              <li>Don’t Count The Day, Make The Days Count: MAn enormous mural painted on the side of a building remembering the late Muhammad Ali. This mural features one of Ali’s famous quotes, “Don’t Count The Day, Make The Days Count.”</li>
              <li>Big K.R.I.T. Mural: A multi-colored mural celebrating the famous southern rapper Big K.R.I.T.</li>
            </ul>
            </div>
          {/* </Card>

          <Card> */}
            <div className="half-card">
            <h2>Picnics and Other Outdoor Adventures</h2>
            <p>
            Anytime you head Downtown during lunchtime, you’ll find workers strolling by the river or hanging out on benches. On a nice day, it’s the perfect place for a casual lunch. 
            Take your crew here during a weekday, and you’ll find a slew of food trucks near the Humana Waterside building, just steps from the Mighty Ohio. 
            There are also a couple of sandwich places nearby, or you can simply bring sandwiches from home. Spread out a blanket and enjoy the sight of barges creeping down river as you dine.
            </p>
            <ul>
              <li>Cherokee Park</li>
              <li>Fairmount Falls Park</li>
              <li>Iroquois Park</li>
              <li>Long Run Park</li>
              <li>Shawnee Park</li>
            </ul>
            </div>
          {/* </Card>

          <Card> */}
            <div className="half-card">
            <h2>Historical Sites Tour</h2>
            <p>
            Frankfort Avenue corridor is a stretch of two-lane road through the Clifton and Crescent Hill neighborhoods, where one will stumble upon historic homes, restaurants, bars, shopping, a mysterious lack of Frankfurters, and other attractions leading right into the busy St. Matthews neighborhood. 
            But it’s in the areas between Mellwood and Stilz avenues where you'll find upscale bourbon bars, regular-scale bookstores, and solid restaurants like the Irish Rover, El Mundo and Blue Dog Bakery.
            </p>
            </div>
          {/* </Card>

          <Card> */}
            <div className="half-card">
            <h2>Tour Old Louisville’s historic homes</h2>
            <p>
            Louisville is home to one of America’s largest collection of Victorian homes. The neighborhood, built in the late 1800s, remains a vibrant residential neighborhood, and it’s worth a couple of hours to simply walk around and admire the Victorian architecture saying things like "Are you sure this isn't Gothic Revivalist?" 
            You can walk down the pedestrian-only streets littered amongst the neighborhood, and you stop by the Old Louisville Information Center to secure a guided walking tour if you're into that. When you’re done, walk a few blocks to Old Louisville Brewery for a beer… or four.
            </p>
            </div>
          {/* </Card>

          <Card> */}
            <div className="half-card">
            <h2>Louisville Loop Bike Ride</h2>
            <p>
            Louisville has public park facilities that could rival most cities, and the Parklands of Floyds Fork might be the cream of the crop. 
            The are is comprised of five different parks with varying amenities, and you and your party can paddle, hike, fish, enjoy playgrounds and spray parks (especially if kids are involved), bike, garden, play sports, and even bring your dog(s). 
            You can also just have a picnic and stroll alongside Beckley Creek. Basically do whatever the hell you want (as long as it's legal and you're not bugging anyone).
            </p>
            </div>
          {/* </Card>

          <Card> */}
            <div className="half-card">
            <h2>Zip line at Louisville Mega Cavern</h2>
            <p>
            You go on vacation, you see zip lines. And Louisville is no different. Except here, the best ones are underground… in a giant cavern. 
            Take a two-and-a-half hour tour through the man-made cavern, which contains more than 17 miles of underground passageways. 
            It's surely a new way to experience the "best view in town."
            </p>
            </div>
          {/* </Card> */}
        </div>
        </div>
          
      )
  }
}

export default RSVPUs;