import React from 'react';
import preloader from '../../images/preloader.gif';

export function Preloader () {
    return (
        <div className='animation-container'>
            <div className='animation-column'/>
            <div className='animation-column'/>
            <div className='animation-column'/>
            <div className='animation-column'/>
            <div className='animation-column'/>
            <div className='animation-column'/>
            <div className='animation-column'/>
            <div className='animation-column'/>
            <img src={preloader} alt='preloader' className='animation-preloader'/>
        </div>
    )
};
