import React from 'react'
import './style.css';
import Card from '../../components/UI/Card'



const Home = props => {

    const listHeight= 1000;
    const listStyle = {
      height: listHeight+'px',
      overflow: 'hidden'
    }

    // const sidePictures= listHeight/3;

    return (
      <div>
        <Card>
          <div className="listPost" style={listStyle}>
    <section /*style={{ width: '70%'}}*/>
            <div className="homePage">
            <img src={"https://s3.amazonaws.com/tw-inlineimages/99238/0/0/4c5929880f9486b543914771890b580e.jpg"} alt="City of Louisville Image" />
            </div>
          </section>
          {/* <section className={'allSidePictures'} style={{ width: '30%'}}>
          <div style={{ height: `${sidePictures}px`}}>
            <img src={"https://s3.amazonaws.com/tw-inlineimages/99238/0/0/4c5929880f9486b543914771890b580e.jpg"} alt="City of Louisville Image" />
            </div>
            <div style={{ height: `${sidePictures}px`}}>
            <img src={"https://s3.amazonaws.com/tw-inlineimages/99238/0/0/4c5929880f9486b543914771890b580e.jpg"} alt="City of Louisville Image" />
            </div>
            <div style={{ height: `${sidePictures}px`}}>
            <img src={"https://s3.amazonaws.com/tw-inlineimages/99238/0/0/4c5929880f9486b543914771890b580e.jpg"} alt="City of Louisville Image" />
            </div >
          </section> */}
          </div>
        </Card>
     
     </div>
    );
}

export default Home;