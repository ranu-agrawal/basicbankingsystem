import React from 'react';
import image from '../../images/bankImage.png';
import { Image } from 'react-bootstrap';

function Home() {

    return (
      <div  style={{padding:'20px'}}>
        <h1 style={{textAlign: "center"}} >WELCOME TO THE TSF BANK</h1>
        <Image
          img src={image} 
          alt="image"  
          style={{margin :'100px', marginBottom: '50px', alignContent: "center" }}
          width={910}
          height={540}
        />
    </div>
    );

}

export default Home;