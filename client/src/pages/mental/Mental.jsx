import React from 'react'
import './mental.css'
// images
import mental from '../../images/mental_page.png'


function Mental() {
    return (
        <div className="mental">
            <img src={mental} alt="mental health" />
            <h1>Mental Health</h1>
        </div>
    )
}

export default Mental