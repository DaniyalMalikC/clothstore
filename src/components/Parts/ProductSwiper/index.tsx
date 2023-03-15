import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Tilt from 'react-parallax-tilt';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper';

import { ProductDisplayProps, ProductSwiperProps } from './types'

import './styles.scss'

function ProductDisplay(props: ProductDisplayProps) {
  const {
    handleClick, image, title, active,
  } = props
  const onClick = () => {
    if (handleClick) {
      handleClick()
    }
  }
  return active ? (
    <Tilt>
      <div onClick={onClick} style={{ opacity: 1 }}>
        <img
          src={image}
          alt={title}
          style={{
            display: 'block',
            width: '100%',
          }}
        />
      </div>
    </Tilt>
  ) : (
    <div onClick={onClick} style={{ opacity: 0.75 }}>
      <img
        src={image}
        alt={title}
        style={{
          display: 'block',
          width: '100%',
        }}
      />
    </div>
  )
}
function ProductSwiper(props: ProductSwiperProps) {
  const { product, activeProduct, handleActive } = props

  const onClick = (index) => {
    if (handleActive) {
      handleActive(index)
    }
  }

  return (
    <Swiper
      effect="coverflow"
      centeredSlides
      slidesPerView="auto"
      slideToClickedSlide
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
      onActiveIndexChange={(e) => onClick(e.activeIndex)}
    >
      {product?.map((item, index) => (
        <SwiperSlide key={item.title}>
          <ProductDisplay
            image={item.image}
            title={item.title}
            active={item.title === activeProduct?.title}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ProductSwiper
