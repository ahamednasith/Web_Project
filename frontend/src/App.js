import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import axios from 'axios';

const BannerSection = () => {
  const [template, setTemplate] = useState('');
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const templateId = searchParams.get('templateId');

    if (templateId) {
      const getBanner = async () => {
        try {
          const response = await axios.get(`http://localhost:7373/template/${templateId}`);
          setTemplate(response.data.data);
        } catch (error) {
          toast.error('Error fetching profile:', error.message);
        }
      };
      getBanner();
    }
  }, []);
  if (template && template.templateId === 800352) {
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
  } else if (template && template.templateId === 559427) {
    return (
      <section className="banner2" style={{
        backgroundImage: `url(${template.banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        borderRadius: "0px 0px 40px 40px",
        position: 'relative'
      }}>
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-7">
              <img src={template.mainImage} alt="Main" className="mainImage" />
            </div>
            <div className="col-md-5 leftcolumn">
              <h3>{template.header}</h3>
              <p>{template.description}</p>
              <button className="btn">{template.button}</button>
            </div>
          </div>
        </div>
      </section>
    )
  } else if (template && template.templateId === 503908) {
    return (
      <section className="banner3" style={{
        backgroundImage: `url(${template.banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: "700px",
        borderRadius: "0px 0px 40px 40px"
      }}>
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-12 text-center leftcolumn">
              <h3>{template.header}</h3>
              <p>{template.description}</p>
              <button className="btn">{template.button}</button>
            </div>
          </div>
        </div>
      </section>
    )
  }
};

const ProductSection = () => {
  const [template, setTemplate] = useState('');
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const templateId = searchParams.get('templateId');

    if (templateId) {
      const getBanner = async () => {
        try {
          const response = await axios.get(`http://localhost:7373/template/${templateId}`);
          setTemplate(response.data.data);
        } catch (error) {
          toast.error('Error fetching profile:', error.message);
        }
      };
      getBanner();
    }
  }, []);

  return (
    <section className="product">
      <div className="container m-5">
        <h1>Products</h1>
        <div className="row">
          {template &&
            template.product.map((productSrc, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <video src={productSrc} autoPlay loop muted />
              </div>
            ))}
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
      {
        breakpoint: 768,
        settings: {
          autoplay: true,
          dots: true,
          infinite: true,
          speed: 300,
          arrows: true,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          autoplay: true,
          arrows: false,
          dots: true,
          infinite: true,
          speed: 300,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 240,
        settings: {
          autoplay: true,
          arrows: false,
          dots: true,
          infinite: true,
          speed: 300,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ],
  };

  return (
    <div className="App">
      <Slider {...sliderSettings}>
        <BannerSection />
        <BannerSection />
      </Slider>
      <ProductSection />
    </div>
  );
}

export default App;
