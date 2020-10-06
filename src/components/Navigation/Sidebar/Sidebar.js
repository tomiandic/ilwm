import React, { useState } from 'react';
import classes from './Sidebar.module.css'
import {useTranslation} from 'react-i18next'

import enIcon from '../../../assets/uk.svg'
import hrIcon from '../../../assets/cro.svg'

const Sidebar = (props) => {

    const [sidebarOpened, setSidebarState] = useState(false)

    const {t, i18n} = useTranslation()

    function handleClick(lang) {
        i18n.changeLanguage(lang)
    }

    const sidebarHandle = () => {
        setSidebarState(prevState => (
            !prevState
        ))
    } 
    return( 
    <>
    <div onClick={sidebarHandle} className={`${classes.hambContainer} ${sidebarOpened ? classes.sidebarOpened : null}`}>
        <span className={classes.hamburger}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </span>
    </div>
    <div className={classes.toggleCircle}>
      <div className={classes.row}>
        <svg className={`${classes.circle} ${sidebarOpened ? classes.circleExpand : null}`} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16"/>
        </svg>
      </div>
    </div>
    <div className={classes.sidebarLinks}>
        <a onClick={sidebarHandle} href="/#pocetna">{t('navLink.1')}</a>
        <a onClick={sidebarHandle} href="/#novosti">{t('navLink.2')}</a>
        <a onClick={sidebarHandle} href="/#aplikacija">{t('navLink.3')}</a>
        <a onClick={sidebarHandle} href="/#galerija">{t('navLink.4')}</a>
        <a onClick={sidebarHandle} href="/#autori">{t('navLink.5')}</a>
        <div className={classes.langSelectorContainer}>
        <div className={classes.langSelector}>
            <div onClick={() => handleClick('hr')} className={classes.language}><img style={i18n.language == 'hr' ? {opacity:1} : {opacity:.5}} src={hrIcon} /></div>
            <div onClick={() => handleClick('en')} className={classes.language}><img style={i18n.language == 'en' ? {opacity:1} : {opacity:.5}} src={enIcon} /></div>
        </div>
    </div>
    </div>
   
    </>
    )
}


export default Sidebar