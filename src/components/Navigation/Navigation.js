import React, { useState } from 'react'
import classes from './Navigation.module.css'
import Button from '../UI/Button/Button'
import Sidebar from './Sidebar/Sidebar'
import {useScrollPosition} from './ScrollDetector/ScrollDetector'
import Langselector from './LangSelector/Langselector'
import logo from '../../assets/logo.svg'
import {useTranslation} from 'react-i18next'
 
function Navigation(props){

const[sticky, setSticky] = useState(true)
const[fromTop, setFromTop] = useState(0)

/* var fromTop = 0 */
 
useScrollPosition(
    
    ({prevPos, currPos}) => {
        setFromTop(currPos.y)
        
        const isShow = currPos.y > prevPos.y
        if(isShow !== sticky) setSticky(isShow)
    },
    [sticky]
)

const {t, i18n} = useTranslation()

 return(
 <div className={fromTop<0 ? `${classes.nav} ${classes.navShadow}` : classes.nav } style={sticky ? {translateY:'100%'} : {transform: 'translateY(-5rem)'}}>
        <div className={classes.navLinks}>
            <img className={classes.navLogo} src={logo} />
            <a className={props.landingVisible ? classes.activeLink : null} href="/#pocetna">{t('navLink.1')}</a>
            <a className={props.newsVisible ? classes.activeLink : null} href="/#novosti">{t('navLink.2')}</a>
            <a className={props.appVisible ? classes.activeLink : null} href="/#aplikacija">{t('navLink.3')}</a>
            <a className={props.galleryVisible ? classes.activeLink : null} href="/#galerija">{t('navLink.4')}</a>
            <a className={props.aboutVisible ? classes.activeLink : null} href="/#autori">{t('navLink.5')}</a>
           {/*  <span className={classes.navIndicator}></span> */}
        </div>
        <Button type="secondary">
        {t('loginButton.1')}
        </Button>
  
            <Langselector />
 
        <Sidebar />
    </div>
 )
}


export default Navigation