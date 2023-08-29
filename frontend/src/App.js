import React, { useState,useEffect } from 'react';
import { toast } from 'react-toastify';
import Slider from 'react-slick';
import './App.css';
import axios from 'axios';

const BannerSection = ({templateId=559427}) => {
    const [template,setTemplate] = useState('');
    useEffect(() => {
      const getBanner = async() =>{
        try {
          const response = await axios.get(`http://localhost:7373/template/${templateId}`)
          setTemplate(response.data.data);
          console.log(response);
        } catch (error) {
          toast.error('Error fetching profile:', error.message);
        }
      };
      getBanner();
    },[templateId])
  return (
    <section className="banner" style={{
      backgroundImage: `url(${template.banner})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      borderRadius: "0px 0px 40px 40px"
    }}>
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-5 leftcolumn">
            <h3>{template.header}</h3>
            <p>{template.description}</p>
            <button className="btn">{template.button}</button>
          </div>
          <div className="col-md-7">
            <img src={template.mainImage} alt="Main" className="mainImage" />
          </div>
        </div>
      </div>
    </section>
  )
};

const ProductSection = ({templateId=559427}) => {
  const [template,setTemplate] = useState('');
  useEffect(() => {
    const getBanner = async() =>{
      try {
        const response = await axios.get(`http://localhost:7373/template/${templateId}`)
        setTemplate(response.data.data);
        console.log(response);
      } catch (error) {
        toast.error('Error fetching profile:', error.message);
      }
    };
    getBanner();
  },[templateId])
  return (
    <section className="product">
      <div className="container m-5">
        <h1>Products</h1>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <video src={template.product} autoPlay loop muted />
          </div>
          <div className="col-lg-4 col-md-6">
            <video src={template.product} autoPlay loop muted />
          </div>
          <div className="col-lg-4 col-md-6">
            <video src={template.product} autoPlay loop muted />
          </div>
          <div className="col-lg-4 col-md-6">
            <video src={template.product} autoPlay loop muted />
          </div>
          <div className="col-lg-4 col-md-6">
            <video src={template.product} autoPlay loop muted />
          </div>
          <div className="col-lg-4 col-md-6">
            <video src={template.product} autoPlay loop muted />
          </div>
        </div>
      </div>
    </section>
  );
};


function App() {
  const sliderSettings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    prevArrow: <button type="button" className="slick-prev">Previous</button>,
    nextArrow: <button type="button" className="slick-next">Next</button>,
    responsive: [
      // Responsive settings here
    ],
  };

  return (
    <div className="App">
      <Slider {...sliderSettings}>
        <BannerSection />
      </Slider>
      <ProductSection />
    </div>
  );
}

export default App;
