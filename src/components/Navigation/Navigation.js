import React, { useState } from 'react'
import classes from './Navigation.module.css'
import Button from '../UI/Button/Button'
import Sidebar from './Sidebar/Sidebar'
import {useScrollPosition} from './ScrollDetector/ScrollDetector'
import Langselector from './LangSelector/Langselector'
import logo from '../../assets/logo.svg'
import {useTranslation} from 'react-i18next'
import {NavHashLink as Link} from 'react-router-hash-link'

 
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
            <Link to={"/#pocetna"}><img className={classes.navLogo} src={logo} /></Link>
            <Link to={"/#pocetna"}>{t('navLink.1')}</Link>
            <Link to={"/#novosti"}>{t('navLink.2')}</Link>
            <Link to={"/#aplikacija"}>{t('navLink.3')}</Link>
            <Link to={"/#galerija"}>{t('navLink.4')}</Link>
            <Link to={"/#autori"}>{t('navLink.5')}</Link>
           {/*  <span className={classes.navIndicator}></span> */}
        </div>
        <a className={classes.navButton}>
        {t('loginButton.1')}
        </a>
            <Langselector />
 
        <Sidebar />
    </div>
 )
}


export default Navigation