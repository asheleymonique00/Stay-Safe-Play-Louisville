import React from 'react'
import './style.css';
import Card from '../../components/UI/Card'
import Sidebar from '../../components/Sidebar';



const Home = props => {

    const listHeight= 1000;
    const listStyle = {
      height: listHeight+'px',
      overflow: 'hidden'
    }

    const sidePictures= listHeight/3;

    return (
      <div>
        <Card>
          <div className="listPost" style={listStyle}>
    <section style={{ width: '70%'}}>
        <div className="homePage">
            <h3>
            Stay Safe & Play Louisville concierge service will show you how to have a great Staycation in Louisville, KY during the COVID Pandemic.
            Instead of going on vacations outside of Louisville why not have a staycation within our hometown with different adventures and places 
            to see that Louisvillans may not know or thought about. 
            </h3>
            <img src={"https://s3.amazonaws.com/tw-inlineimages/99238/0/0/4c5929880f9486b543914771890b580e.jpg"} alt="City of Louisville Image" />            
            </div>
            <div style={{textAlign: 'center'}}>
              <h1>Louisville, KY</h1>
              <p>Today would be a great day to fire, arrest or charge the cops who killed Breonna Taylor. No Justice, No Peace. Know Justice, Know Peace. #SayHerName #NJNPLou #BreonnaTaylor</p>
            </div>
      </section>
        </div>
         </Card>
         {/* <section className="homeSidebar">
          <div>
            <Sidebar />
            </div>
          </section>             
        */}
     </div>
    );
}

export default Home;