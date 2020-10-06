import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Navigation, Virtual} from 'swiper'
import POSTS_QUERY from "../Queries/Posts/postsSectionQuery" 
import {useQuery} from '@apollo/client'
import 'swiper/swiper-bundle.css';
import Button from '../UI/Button/Button'
import {useTranslation} from 'react-i18next'
import leftSlideImg from '../../assets/slideLeft.svg'
import rightSlideImg from '../../assets/slideRight.svg'
import {Link} from "react-router-dom"
import classes from '../Main/Main.module.css'



SwiperCore.use([Navigation]); 


const Posts = (props) => {
    const {t, i18n} = useTranslation()

    const {data, loading} = useQuery(POSTS_QUERY)

    if(loading) return 'Loading...'

    const posts = data.posts.map((post) => (<SwiperSlide key={post.id}>
        <Link to={"novosti/" +  post.id}>
        <a className={classes.postLink}>
            <img className={classes.swiperImg} src={post.picture.url}/>
            <div className={classes.postOverlay}></div>
            <div className={classes.postContent}>
                <p>{post.category.name}</p>
                <h2>{post.title}</h2>
            </div>
        </a>
        </Link>
    </SwiperSlide>))


    return ( 
        <section ref={props.fNewsRef} id="novosti" className={`${classes.articleSection} ${classes.sectionGlobal}`}>
        <div className={classes.sectionContent}>
            <div className={classes.sectionTitleContainer}>
                <h2 className={classes.sectionTitle}>{t('sectionTitle.1')}</h2>
                <div className={classes.sliderNav}>
                    <img id='swipeLeft' className={classes.leftArrow} src={leftSlideImg}/>
                    <img id='swipeRight' className={classes.rightArrow} src={rightSlideImg}/>
                </div>
            </div>
            <Swiper
            spaceBetween={15}
            slidesPerView={2}
            speed={700}
            breakpoints={{
                700:{
                    slidesPerView: 3,
                    spaceBetween: 10
                },
                1700:{
                    slidesPerView: 4,
                    spaceBetween: 20
                }
            }}
            navigation={{prevEl: '#swipeLeft', nextEl: '#swipeRight'}}
            >
           {posts}

                   {/*  <SwiperSlide><a href="https://swiperjs.com/react/#swiper-props" className={classes.postLink}><img className={classes.swiperImg} src={postImg}/><div className={classes.postOverlay}></div><div className={classes.postContent}><p>Projekti</p><h2>Lorem ipsum dolor Lorem ipsum dolor</h2></div></a></SwiperSlide>
                    <SwiperSlide><a href="https://swiperjs.com/react/#swiper-props" className={classes.postLink}><img className={classes.swiperImg} src={postImg}/><div className={classes.postOverlay}></div><div className={classes.postContent}><p>Projekti</p><h2>Lorem ipsum dolor Lorem ipsum dolor</h2></div></a></SwiperSlide>
                    <SwiperSlide><a href="https://swiperjs.com/react/#swiper-props" className={classes.postLink}><img className={classes.swiperImg} src={postImg}/><div className={classes.postOverlay}></div><div className={classes.postContent}><p>Projekti</p><h2>Lorem ipsum dolor Lorem ipsum dolor</h2></div></a></SwiperSlide>
                    <SwiperSlide><a href="https://swiperjs.com/react/#swiper-props" className={classes.postLink}><img className={classes.swiperImg} src={postImg}/><div className={classes.postOverlay}></div><div className={classes.postContent}><p>Projekti</p><h2>Lorem ipsum dolor Lorem ipsum dolor</h2></div></a></SwiperSlide>
                    <SwiperSlide><a href="https://swiperjs.com/react/#swiper-props" className={classes.postLink}><img className={classes.swiperImg} src={postImg}/><div className={classes.postOverlay}></div><div className={classes.postContent}><p>Projekti</p><h2>Lorem ipsum dolor Lorem ipsum dolor</h2></div></a></SwiperSlide>
                  */}
            </Swiper>
            <div className={classes.buttonContainer}>
                  <Link to="/novosti">
                     <Button type="secondary-strong">{t('showMoreButton.1')}</Button>
                  </Link>
            </div>
        </div>
    </section>
     );
}
 
export default Posts;