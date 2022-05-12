import React from 'react'
import './mental.css'
// images
import mental from '../../images/mental_page.png'


function Mental() {
    return (
        <div className="mental">
            <img src={mental} alt="mental health" />
            <h1>Mental Health</h1>
            <div className="explained">
                <h2>Explained</h2>
                <p>Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices. Mental health is important at every stage of life, from childhood and adolescence through adulthood.</p>
            </div>
        </div>
    )
}

export default Mental