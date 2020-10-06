import React from 'react';
import classes from './Langselector.module.css'
import {useTranslation} from 'react-i18next'

import enIcon from '../../../assets/uk.svg'
import hrIcon from '../../../assets/cro.svg'


function Langselector(){

    const {t, i18n} = useTranslation()

    function handleClick(lang) {
        i18n.changeLanguage(lang)
    }

    return(
        <div className={classes.langSelectorContainer}>
            <div className={classes.activeLanguage}><img src={i18n.language=='hr' ? hrIcon : enIcon} /></div>
            <div className={classes.langDropdown}>
                <div onClick={() => handleClick('hr')} className={classes.language}><img src={hrIcon} /></div>
                <div onClick={() => handleClick('en')} className={classes.language}><img src={enIcon} /></div>
            </div>

        </div>
    )
}

export default Langselector