"use client"
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from './ReviewCard';

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

const reviews = [
  {
    id: 1,
    name: 'Fynley Wilkinson',
    caseType: 'Family Law Client',
    review: 'Excellent legal services! Highly recommend Lex Alliance for their professionalism, expertise, and compassionate approach. They went above and beyond.'
  },
  {
    id: 2,
    name: 'Sarah Mitchell',
    caseType: 'Business Law Client',
    review: 'Fantastic team to work with. They provided clear guidance throughout the entire process and successfully resolved our complex business matters.'
  },
  {
    id: 3,
    name: 'John Davis',
    caseType: 'Criminal Law Client',
    review: 'Trustworthy lawyers who truly care about their clients. From consultation to resolution, their professionalism and dedication were evident every step.'
  },
  {
    id: 4,
    name: 'Maria Rodriguez',
    caseType: 'Family Law Client',
    review: 'Outstanding legal representation. They listened to my concerns, explained everything clearly, and achieved an excellent outcome for my case.'
  },
  {
    id: 5,
    name: 'Robert Thompson',
    caseType: 'Business Law Client',
    review: 'Professional, knowledgeable, and efficient. Lex Alliance handled our contract negotiations flawlessly. Highly satisfied with their services.'
  },
  {
    id: 6,
    name: 'Emily Johnson',
    caseType: 'Criminal Law Client',
    review: 'Lex Alliance provided exceptional legal support during a challenging time. Their expertise and dedication led to a favorable outcome in my case.'
  },
  {
    id: 7,
    name: 'Michael Brown',
    caseType: 'Business Law Client',
    review: 'The team at Lex Alliance is top-notch. They provided strategic advice that helped our business navigate complex legal challenges with confidence.'
  },
  {
    id: 8,
    name: 'Olivia Wilson',
    caseType: 'Family Law Client',
    review: 'Compassionate and skilled attorneys. They made a difficult situation more manageable and achieved a positive resolution for my family matter.'
  },
  {
    id: 9,
    name: 'David Lee',
    caseType: 'Criminal Law Client',
    review: 'Highly recommend Lex Alliance for anyone in need of legal assistance. Their professionalism, expertise, and commitment to clients are unmatched.'
  },
  {
    id: 10,
    name: 'Sophia Martinez',
    caseType: 'Business Law Client',
    review: 'Exceptional service from start to finish. Lex Alliance provided clear communication, expert advice, and successful outcomes for our business legal needs.'
  },
  {
    id: 11,
    name: 'James Anderson',
    caseType: 'Family Law Client',
    review: 'Lex Alliance exceeded my expectations. Their team was attentive, knowledgeable, and dedicated to achieving the best possible outcome for my case.'
  },
  {
    id: 12,
    name: 'Isabella Garcia',
    caseType: 'Criminal Law Client',
    review: 'Professional and compassionate legal representation. Lex Alliance guided me through a complex legal process with expertise and care.'
  }



];

const ReviewSlider = () => {
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
