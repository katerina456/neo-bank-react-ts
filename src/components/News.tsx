import React from "react";
import { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Wraper from "./Wraper";

import 'swiper/css';
import 'swiper/css/navigation';

import "../styles/news.scss";


const News: React.FC = () => {
    const [allNews, setAllNews] = useState<any[]>([]);

    const generateKey = (str:string) => {
        return `${str}_${ new Date().getTime() }`;
    }

    const newsElements = allNews.map(item => {
        return (
            <SwiperSlide key={generateKey(item.title)} className="slider__item ">
                <div><a href={item.url} target="blank">
                    <img src={item.urlToImage !== null ? item.urlToImage : ''} alt="" />
                </a></div>
                <a href={item.url} target="blank"><p className="slider__title">
                    {item.title !== null ? item.title : ''}
                </p></a>
                <a href={item.url} target="blank"><p className="slider__text">
                    {item.description !== null ? item.description : ''}
                </p></a>           
            </SwiperSlide>
        )
    })


    useEffect(() => {
        getNews();
    }, [])


    function getNews() {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=af2516f1c3454c5e98c984f39355252f`, {
            "method": "GET"
        })
      
        .then(res => res.json())
        .then(data => setAllNews(data.articles))
        .catch(err => console.log(err))
    }
      

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <Wraper classes="news">
            <h2 className="news__title">Current news from the world of finance</h2>
            <p className="news__text">
                We update the news feed every 15 minutes. 
                You can learn more by clicking on the news you are interested in.
            </p>
            <Swiper className="news__slider" modules={[Navigation]}
                spaceBetween={80}
                slidesPerView="auto"
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
            >
                <div className="slider swiper-wrapper">
                    {newsElements}
                </div>
                <div className="slider__buttons">
                    <div className="slider__button swiper-button-prev" ref={prevRef}></div>
                    <div className="slider__button swiper-button-next" ref={nextRef}></div>
                </div>
            </Swiper>
        </Wraper>
    )
}

export default News;