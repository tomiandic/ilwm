import React, { useRef } from 'react';
import Button from '../UI/Button/Button'
import Gallery from '../Gallery/Gallery'
import {useTranslation} from 'react-i18next'
import Posts from '../PostsSection/PostsSection'

import classes from './Main.module.css'

import landingImg from '../../assets/landing.jpg'
import arrowImg from '../../assets/arrow.svg'

import elipseImg from '../../assets/elipse.svg'
import elipseDecImg from '../../assets/elipseDec.svg'
import laptopImg from '../../assets/laptop.svg'
import mailImg from '../../assets/mail.svg'
import autor1 from '../../assets/image1.jpg'
import autor2 from '../../assets/image2.jpg'
import autor3 from '../../assets/image3.jpg'
import autor4 from '../../assets/image1.png'
import orangeElipse from '../../assets/orangeElipse.svg'
import orangeElipseFilled from '../../assets/orangeElipseFilled.svg'
import blueElipse from '../../assets/blueElipse.svg'


const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)


const Main = (props) => {


    const desc = useRef(null)
    const executeScroll = () => scrollToRef(desc)
    const {t, i18n} = useTranslation()

    return(
    <>
    <div ref={props.fLandingRef} id="pocetna" className={classes.landing}>
        <img className={classes.landingImage} src={landingImg} />
            <div className={classes.landingContent}>
                <h3>{t('landingTitleDesc.1')}</h3>
                <h1>{t('landingMainTitle.1')}</h1>
                <p>{t('landingMainSubtitle.1')}</p>
                <Button onClick={executeScroll} type="main">
                     {t('landingButton.1')}
                     <img className={classes.arrowIcon} src={arrowImg} />
               </Button>
            </div>
    </div>
    <section ref={desc} id="opis" className={classes.description}>
        <article>
            <img className={classes.elipseImage} src={elipseImg} />
            <p className={classes.descParagraph}>
            {t('mainDesc.1')}
            </p>
        </article>
        <img className={classes.decorationRight} src={blueElipse} />
        <img className={classes.decorationLeft} src={orangeElipseFilled} />

    </section>
        <Posts></Posts>
    <section ref={props.fAppRef} id="aplikacija" className={classes.sectionGlobal}>
        <div className={classes.sectionContent}>
            <div className={classes.sectionTitleContainer}>
                <h2 className={classes.sectionTitle}>{t('sectionTitle.2')}</h2>
            </div>
                <p className={classes.appDesc1}>
                    {t('appDesc.1')}
                </p><br/><br/><br/>
                <p className={classes.appDesc2}>
                    {t('appDesc.2')}
                </p>
            <img src={elipseDecImg} className={classes.elipseDec1}/>

            <div className={classes.buttonHolder}>
                <img src={laptopImg} className={classes.laptopImg} />
                <Button type="secondary-strong">{t('showMoreButton.2')}</Button>
            </div>

        </div>
    </section>
    <section ref={props.fGalleryRef} id="galerija" className={classes.sectionGlobal}>
    <img className={classes.elipseImage} src={elipseImg} />
        
                <Gallery />

     </section>
     <section ref={props.fAboutRef} id="autori" className={`${classes.sectionGlobal} ${classes.description}`}>
        <img className={classes.decorationRight} src={orangeElipse} />
        <img className={classes.decorationLeftAutors} src={orangeElipseFilled} />
        <img className={classes.decorationRightAutors} src={blueElipse} />



            <div className={classes.sectionContent}>
                <div className={classes.sectionTitleContainer}>
                    <h2 style={{color:'#fff', lineHeight: '4rem'}} className={classes.sectionTitle}>{t('sectionTitle.4')}</h2>
                </div>
                <div className={classes.autorsContainer}>
                    <div className={classes.autor}>
                        <div className={classes.autorDetails}>
                        <img src={autor1}/>
                        <h3>{t('autors.1.name')}</h3>
                        <p>{t('autors.1.role')}</p>
                        </div>
                        <p>{t('autors.1.about')}
                        </p>
                    </div>
                    <div className={classes.autor}>
                        <div className={classes.autorDetails}>
                        <img src={autor2}/>
                        <h3>{t('autors.2.name')}</h3>
                        <p>{t('autors.2.role')}</p>
                        </div>
                        <p>{t('autors.2.about')} </p>
                    </div>
                    <div className={classes.autor}>
                        <div className={classes.autorDetails}>
                        <img src={autor4}/>
                        <h3>{t('autors.3.name')}</h3>
                        <p>{t('autors.3.role')}</p>
                        </div>
                        <p>{t('autors.3.about')}</p>
                    </div>
                    <div className={classes.autor}>
                        <div className={classes.autorDetails}>
                        <img src={autor3}/>
                        <h3>{t('autors.4.name')}</h3>
                        <p>{t('autors.4.role')}</p>
                        </div>
                        <p>{t('autors.4.about')}</p>
                    </div>
                </div>
            </div>
     </section>
     <section className={`${classes.sectionGlobal}, ${classes.sectionContact}`}>
            <div className={`${classes.sectionContent}, ${classes.contactContent}`}>
                <h2 className={classes.contactTitle}>{t('sectionTitle.3')}</h2>
                <div className={classes.contactLinks}>
                    <a className={classes.contactLink} href="mailto:vilko.petric@uniri.hr"><img src={mailImg}/>vilko.petric@uniri.hr</a><br/><br/>
                    {/* <a target="_blank" className={classes.contactLink} href="https://www.facebook.com/vilko.petric.35"><img src={phoneImg}/>Facebook stranica</a> */}
                </div>
            </div>
     </section>
    </>
)
                            }
export default Main