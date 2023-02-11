import React, { useState, useContext } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Tilt from 'react-parallax-tilt';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper';

import { Box, Container, Typography } from '@mui/material';
import { ProductContext } from '../../context/ProductContext';
import './styles.scss'

function Product() {
  const { product } = useContext(ProductContext)
  const [activeProduct, setActiveProduct] = useState(product[0])
  const handleActive = (index) => {
    setActiveProduct(product[index])
  }
  return (
    <div>
      <Swiper
        effect="coverflow"
      // grabCursor
        centeredSlides
        spaceBetween={100}
        slidesPerView={5}
        slideToClickedSlide
      // pagination
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {product.map((item, index) => (item.title === activeProduct.title ? (
          <SwiperSlide key={item.title}>
            <Tilt>
              <div onClick={() => handleActive(index)}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    display: 'block',
                    width: '100%',
                  }}
                />
              </div>
            </Tilt>
          </SwiperSlide>
        ) : (
          <SwiperSlide key={item.title}>
            <div onClick={() => handleActive(index)}>
              <img
                src={item.image}
                alt={item.title}
                style={{
                  display: 'block',
                  width: '100%',
                }}
              />
            </div>
          </SwiperSlide>
        )))}

      </Swiper>
      <Container>
        <Box>
          <Typography>
            {activeProduct.title}
          </Typography>
        </Box>
      </Container>
    </div>
  );
}

export default Product;
