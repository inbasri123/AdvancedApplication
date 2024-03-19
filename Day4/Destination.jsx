import React from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import"../../assets/css/Destination.css";
import s1 from '../../assets/images/s1.jpg';
export default function Destination() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
  return (
   <div className='back'>
    <Slider {...settings} className='slider'>
        {data.map((d, index) => (
            <div key={index} className="card">
                <div className='card-header'>
                    <img src={d.img} alt="" />
                </div>
                <div className='card-body'>
                    <p className='card-name'>{d.name}</p>
                    <p className='card-price'>{d.price}</p>
                    <button className='book-button'><Link to='/booking'>Book now</Link></button>
                </div>
            </div>
            ))}
            </Slider>
            </div>
  )
}

const data=[
    {
        name:'Mumbai-Mumbai',
        price:'23,000',
        img: s1
    },
    {
        name:'Mumbai-Goa',
        price:'50,000',
        img: s1
    },
    {
        name:'mumbai-goa-mumbai',
        price:'70,000',
        img: s1
    },
    {
        name:"Goa-mumbai",
        price:"40,000",
        img: s1
    },
    {
        name:"Goa-Goa",
        price:"1,00,000",
        img: s1
    },
    {
        name:"Goa-Mumbai-Goa",
        price:"1,50,000",
        img: s1
    },
    {
        name:"Mumbai-Goa-Chennai",
        price:"2,00,000",
        img: s1
    }
]