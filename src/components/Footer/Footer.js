import React from 'react';
import classes from './Footer.module.css'
import {useTranslation} from 'react-i18next'


import toTop from '../../assets/toTop.svg'
import logo1 from '../../assets/uniri-logo.svg'
import logo2 from '../../assets/uniri-grb.svg'
import logo3 from '../../assets/ufri.png'


const Footer = () => {

    const {t, i18n} = useTranslation()

    const scrollToRef = () => window.scrollTo(0, 0)


    return(
    <div className={classes.footerContainer}>
        <a className={classes.topButton} href="#pocetna"><img onClick={()=> (scrollToRef())} src={toTop}/></a>
       
        <div className={classes.footerBox}>
            <h4 className={classes.footerBoxTitle}>{t('footerTitle.1')}</h4>
            <p className={classes.mainFooterItem}>{t('footerLink.1')}</p>
            <p>{t('footerLink.2')}</p>
        </div>
        <div className={classes.footerBox}>
            <h4 className={classes.footerBoxTitle}>{t('footerTitle.2')}</h4>
            <a target="_blank" className={classes.footerLink} href="https://www.ufri.uniri.hr/hr/studiji/cjelozivotno-obrazovanje/200-voditelj-kinezioloskih-aktivnosti-djece-rane-i-predskolske-dobi.html">{t('footerLink.3')}</a>
 {/*            <a className={classes.footerLink} href="">Link na vanjsku stranicu</a> */}
        </div>
        <div className={classes.footerBox}>
            <h4 className={classes.footerBoxTitle}>{t('footerTitle.3')}</h4>
            <a target="_blank" className={classes.footerLink} href="https://www.facebook.com/vilko.petric.35">{t('footerLink.4')}</a>
           {/*  <a className={classes.footerLink} href="">Link</a> */}
        </div>
        <div className={classes.logoHolder}>
            <a href="https://uniri.hr/en/home/"><img src={logo1}/></a>
            <a href="https://uniri.hr/en/home/"><img src={logo2}/></a>
            <a href="https://www.ufri.uniri.hr/hr/"><img src={logo3}/></a>
        </div>
    </div>
)}

export default Footer