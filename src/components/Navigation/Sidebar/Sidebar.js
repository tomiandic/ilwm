import React, { useState } from 'react';
import classes from './Sidebar.module.css'
import {useTranslation} from 'react-i18next'
import Button from '../../UI/Button/Button'
import {HashLink as Link} from 'react-router-hash-link'
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
      <div className={`${classes.row} ${sidebarOpened ? classes.circleExpand : null}`} >

        
      </div>
    </div>
    <div className={classes.sidebarLinks}>
        <Link to={"/#pocetna"} onClick={sidebarHandle}>{t('navLink.1')}</Link>
        <Link to={"/#novosti"} onClick={sidebarHandle}>{t('navLink.2')}</Link>
        <Link to={"/#aplikacija"} onClick={sidebarHandle}>{t('navLink.3')}</Link>
        <Link to={"/#galerija"} onClick={sidebarHandle}>{t('navLink.4')}</Link>
        <Link to={"/#autori"} onClick={sidebarHandle}>{t('navLink.5')}</Link>
        <Button type="white">
            {t('loginButton.1')}
        </Button>
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