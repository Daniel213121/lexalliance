"use client"
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from './ReviewCard';
import { useLocale } from '@/components/Locale/LocaleProvider'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

// default reviews will be taken from translations via useLocale

const ReviewSlider = () => {
  const { t } = useLocale()
  const reviews = (t('review.items') as any[]) || []
  return (
    <div className='py-4'>
      <style>{`
        .react-multi-carousel-list {
          position: relative;
        }
        .react-carousel__dot {
          background-color: rgba(148, 163, 184, 0.4) !important;
          border: none !important;
          height: 10px !important;
          width: 10px !important;
          border-radius: 50% !important;
          margin: 0 6px !important;
          cursor: pointer !important;
          transition: all 0.3s ease !important;
        }
        .react-carousel__dot--active {
          background-color: #f59e0b !important;
          transform: scale(1.2) !important;
        }
        .react-carousel__dot:hover {
          background-color: #fbbf24 !important;
        }
        .carousel-item-padding-40-px {
          padding: 0 12px !important;
        }
      `}</style>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all 0.5s"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {reviews.map((item) => (
          <ReviewCard 
            key={item.id}
            name={item.name} 
            caseType={item.caseType}
            review={item.review} 
          />
        ))}
      </Carousel>
    </div>
  );
}

export default ReviewSlider
