import React from "react";
import "./Home.css";
import Product from './Product'

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?size=626&ext=jpg&ga=GA1.2.582235323.1623238867"
          alt=""
        />

        <div className="home_row"> <Product title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback – 6 October 2011' price={199.99} image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg' rating={5}/> 
        <Product title='Noise ColorFit Pro 2 Full Touch Control Smart Watch with 35g Weight & Upgraded LCD Display (Royal Blue)' price={189.29} image='https://images-eu.ssl-images-amazon.com/images/I/41o9GoUvfML._SX300_SY300_QL70_FMwebp_.jpg' rating={3}/></div>
        <div className="home_row"> <Product title='Portronics SoundDrum POR-871, Bluetooth Stereo Speaker (Black)' price={1699.50} image='https://m.media-amazon.com/images/I/712Ta39C3fL._SX522_.jpg' rating={5}/>
        <Product title='Samsung Galaxy M12 (White,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor|True 48 MP Quad Camera|90Hz' price={14999.99} image='https://m.media-amazon.com/images/I/71Y8rH2cJiL._SX425_.jpg' rating={4}/>
        <Product title='POUR FEMME Full Sleeve solid Black Womens Regular Comfort Fit DENIM JACKET' price={199} image='https://m.media-amazon.com/images/I/71Q6xL1qd9L._UY679_.jpg' rating={4}/></div>
        <div className="home_row"><Product title='Redmi 108 cm (43 inches) 4K Ultra HD Android Smart LED TV X43 | L43R7-7AIN (Black) (2022 Model)' price={379.90} image='https://m.media-amazon.com/images/I/81iLglMLueL._SX522_.jpg' rating={4}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
