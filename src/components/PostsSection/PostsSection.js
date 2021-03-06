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
import Loader from '../UI/Loader/Loader'



SwiperCore.use([Navigation]); 


const Posts = (props) => {
    const {t, i18n} = useTranslation()

    const {data, error, loading} = useQuery(POSTS_QUERY)

    if(loading) return <Loader />
    if(error) console.log(error)
    const posts = data.posts.map((post) => (<SwiperSlide key={post.id}>
        <Link to={"novosti/" +  post.id} className={classes.postLink}>
            <img className={classes.swiperImg} src={`/api/${post.image.url}`}/>
            <div className={classes.postOverlay}></div>
            <div className={classes.postContent}>
                <p>{post.categories[0]&&post.categories[0].name}</p>
                <h2>{post.title}</h2>
            </div>
        
        </Link>
    </SwiperSlide>))


    return ( 
        <section ref={props.fNewsRef} id="novosti" className={`${classes.articleSection} ${classes.sectionGlobal}`}>
        <div className={classes.sectionContent}>
            <div className={classes.sectionTitleContainer}>
                <h2 className={classes.sectionTitle}>{t('sectionTitle.1')}</h2>
                {data.posts.length>3&&
                <div className={classes.sliderNav}>
                        <img id='swipeLeft' className={classes.leftArrow} src={leftSlideImg}/>
                        <img id='swipeRight' className={classes.rightArrow} src={rightSlideImg}/>
                </div>
                    }
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
            </Swiper>
            
            <div className={classes.buttonContainer}>
                {data.posts.length>6&&
                  <Link to="/novosti">
                     <Button type="secondary-strong">{t('showMoreButton.1')}</Button>
                  </Link>}
            </div>
        </div>
    </section>
     );
}
 
export default Posts;