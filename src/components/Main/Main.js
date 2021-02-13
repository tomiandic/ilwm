import React, { useRef, useState, useEffect} from 'react';
import Button from '../UI/Button/Button'
import Gallery from '../Gallery/Gallery' 
import {useTranslation} from 'react-i18next'
import Lightbox from 'fslightbox-react'
import Posts from '../PostsSection/PostsSection' 
import classes from './Main.module.css'
import CONTENT_QUERY from "../Queries/PageContent/pageContentQuery"
import {useQuery} from '@apollo/client'
import Query from "../Queries/Query" 
import AUTHORS_QUERY from '../Queries/Authors/authorsQuery'
import Loader from '../UI/Loader/Loader'

import landingImg from '../../assets/landing.jpg'
import arrowImg from '../../assets/arrow.svg'
import elipseImg from '../../assets/elipse.svg'
import elipseDecImg from '../../assets/elipseDec.svg'
import laptopImg from '../../assets/laptop.svg'
import mailImg from '../../assets/mail.svg'
import contactMail from '../../assets/cmail.svg'
import phoneImg from '../../assets/phone.svg'
import protoVid from '../../assets/vid.mp4'
import orangeElipse from '../../assets/orangeElipse.svg'
import orangeElipseFilled from '../../assets/orangeElipseFilled.svg'

import gsap from 'gsap';
import { TweenMax, Power3, TimelineLite } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'; 



const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) 


const Main = () => {

    const [toggler, setToggler] = useState(false)
    const [loaded, setLoaded] = useState(false)


    let deco = useRef(null);
    let deco2 = useRef(null);
    let laptop = useRef(null);
    let mainDesc = useRef(null);
    let autors = useRef(null);


    let tl = new TimelineLite();

    useEffect(() => {
        if(loaded){
            console.log(autors.current.children)
            gsap.registerPlugin(ScrollTrigger);
          
            gsap.from(mainDesc.current, {
                opacity:0,  
                translateY: 200,
                duration:3,
                ease: Power3.easeOut,
                scrollTrigger:{
                    trigger: mainDesc.current,
                    start: 'top center+=200',
                    toggleActions: 'play none none reverse'
                }})

            gsap.from(deco.current, {
                duration:2,
                translateX:-100,
                ease: Power3.easeOut,
                scrollTrigger:{
                    trigger: deco.current,
                    start: 'top center+=200',
                    toggleActions: 'play none none reverse'
                }})

            gsap.from(laptop.current, {
                duration:3,
                translateX: 700,
                opacity:0,
                ease: Power3.easeOut,
                scrollTrigger:{
                    trigger: laptop.current,
                    toggleActions: 'play none none none'
                }})
            
            }}, [loaded])

    const desc = useRef(null)
    const executeScroll = () => scrollToRef(desc) 
    const {t, i18n} = useTranslation(['translation', 'loaded'])
    
     const {data, error, loading} = useQuery(CONTENT_QUERY) 

    if(loading) return <Loader />
    if(error) console.log(error)
    else{
    i18n.addResourceBundle('hr', 'loaded', {
        mainTitle: data.pageContent.mainTitle_hr,
        landingContent: data.pageContent.landingText_hr,
        mainDescription: data.pageContent.mainDescription_hr,
        appDescription1: data.pageContent.appDescription1_hr,
        appDescription2: data.pageContent.appDescription2_hr
      });

    i18n.addResourceBundle('en', 'loaded', {
        mainTitle: data.pageContent.mainTitle_en,
        landingContent: data.pageContent.landingText_en,
        mainDescription: data.pageContent.mainDescription_en,
        appDescription1: data.pageContent.appDescription1_en,
        appDescription2: data.pageContent.appDescription2_en
    });
    }


    return(
   <>

    <div id="pocetna" className={classes.landing}>
      
        <div className={classes.landingImageHolder}>
            <img className={classes.landingImage} src={landingImg} />
        </div>
        <div className={classes.landingContent}>
            <h3>{t('landingTitleDesc.1')}</h3>
            <h1>{t('loaded:mainTitle')}</h1>
            <p>{t('loaded:landingContent')}</p>
            <Button onClick={executeScroll} type="main">
                {t('landingButton.1')}
                <img className={classes.arrowIcon} src={arrowImg} />
           </Button>
        </div>
    </div>
    <section ref={desc} id="descTrigger" className={classes.description}>
        <article>
            <img className={classes.elipseImage} src={elipseImg} />
            <p ref={el => {setLoaded(true);mainDesc.current = el}} className={classes.descParagraph}>
                {t('loaded:mainDescription')}
            </p>
        </article>
        <img  ref={el => deco.current = el } className={classes.decorationLeft} src={orangeElipseFilled} />

    </section>
        <Posts></Posts>
    <section style={{overflow:"hidden"}} id="aplikacija" className={classes.sectionGlobal}>
        <div className={classes.sectionContent}>
            <div className={classes.sectionTitleContainer}>
                <h2 className={classes.sectionTitle}>{t('sectionTitle.2')}</h2>
            </div>
                <p className={classes.appDesc1}>

                    {t('loaded:appDescription1')}
                    
                </p><br/><br/><br/>
                <p className={classes.appDesc2}>

                    {t('loaded:appDescription2')}
                    
                </p>
            <img ref={el => { deco2.current = el}} src={elipseDecImg} className={classes.elipseDec1}/>

            <div ref={el => { laptop.current = el}}  className={classes.buttonHolder}>
                <img id="laptop" src={laptopImg} className={classes.laptopImg} />
                <Button onClick={(() => setToggler(!toggler))} type="secondary-strong">{t('showMoreButton.2')}</Button>
            </div>
            <Lightbox toggler={toggler} 
                 sources={[protoVid]}
                 sourceIndex={0}
            ></Lightbox>
        </div>
    </section>
    <section style={{paddingBottom:'7px'}} id="galerija" className={classes.sectionGlobal}>
    <img className={classes.elipseImage} src={elipseImg} />
        
                <Gallery />

     </section>
     <section  style={{paddingTop: "11rem"}} id="autori" className={`${classes.sectionGlobal} ${classes.description}`}>
        <img className={classes.decorationRight} src={orangeElipse} />
            <div className={classes.sectionContent}>
            <div className={classes.sectionTitleContainer}>
                    <h2 style={{color:'#fff', marginBottom: "2rem"}} className={classes.sectionTitle}>{t('sectionTitle.4')}</h2>
                </div>
                <div ref={el => autors.current = el}  className={classes.autorsContainer}>
                <Query query={AUTHORS_QUERY}>
                {({data: {authors}})=>{
            
                    return(authors.map((author)=>{
                       return(
                        <div key={author.id} className={classes.autorDetails}>
                            <img src={author.profilePicture.url}/>
                            <p className={classes.authorRole}>{author.role}</p>
                            <h3>{author.fullName}</h3>
                            <p className={classes.autorInfo}> {author.workPlace}</p>
                            <div className={classes.autorContactHolder}>
                                <img className={classes.mailIcon} src={contactMail}/>
                            <a href={"mailto:"+ author.mailAddress} className={classes.autorContact}>{author.mailAddress}</a>
                            </div>
                         </div>
                           )}))
                      }}
                  </Query>
                </div>
            </div>
     </section>
     <section className={`${classes.sectionGlobal}, ${classes.sectionContact}`}>
            <div className={`${classes.sectionContent}, ${classes.contactContent}`}>
                <h2 className={classes.contactTitle}>{t('sectionTitle.3')}</h2>
                <div className={classes.contactLinks}>
                    <a className={classes.contactLink} href="mailto:vilko.petric@uniri.hr">
                        <img src={mailImg}/>{/* vilko.petric@uniri.hr */}</a>
                    <a target="_blank" className={classes.contactLink} href="https://www.facebook.com/vilko.petric.35"><img src={phoneImg}/>{/* Facebook stranica */}</a> 
                </div>
            </div>
     </section>
    </>

)
                            }
export default Main