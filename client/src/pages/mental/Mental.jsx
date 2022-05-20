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
                <p>Over the course of your life, if you experience mental health problems, your thinking, mood, and behavior could be affected. Biological factors (genes and brain chemistry), life experiences (trauma and abuse), and family history of mental health problems can all contribute to mental health problems.</p>
                <p>Mental health problems are common but there are many methods available to cope and heal. People with mental health problems can get better and many recover completely.</p>
            </div>
            <div className="awareness">
                <h2>Awareness</h2>
                <p>Experiencing certain feelings or behaviors can be an early warning sign of a problem. These include irregular sleep, low energy, numbness, unexplained aches, helpless or hopeless, confused, forgetful, on edge, angry, worried, scared, fighting with loved ones, mood swings, persistent thoughts and memories, hearing voices, thinking of harming yourself or others, inability to perform daily tasks and <a href="https://www.nami.org/About-Mental-Illness/Warning-Signs-and-Symptoms" target="_blank" rel="noreferrer">more</a>.</p>
                <p>Positive mental health allows people to cope with the stresses of life, improve their daily mood, think clearer, work productively, boost their self-esteem, build deeper relationships and make meaningful contributions to their communities which ultimately leads to a greater sense of purpose and potential.</p>
            </div>
            <div className="experience">
                <h2>Experience</h2>
                <p>Meditation has really helped me manage my thoughts and emotions better, resulting in better mental health over time. At first, meditation felt hard and sometimes even a waste of time. However, I began to realize it is uncomfortable because humans in general are not used to taking a break to focus on being fully present. These days meditation is like an escape for me, where I forget about the world and focus on myself.</p>
                <p>Many of us have meditated without even realizing it. If you’ve ever sat in silence and enjoyed a moment to yourself, you’ve meditated. If you’ve ever stopped to focus on your breath, you’ve meditated. There are many types of meditation, and many misconceptions that go along with them. At the core, meditation is turning your attention away from the mental noise that comes from everyday life. This could mean focusing on your breath, mentally repeating a phrase, or simply just focusing your thoughts on the present moment. </p>
                <p>While the practice may seem insignificant, the results can be incredibly significant. Studies suggest that mindful meditation can help reduce anxiety, depression and psychological pain. Plus, mindful meditation has also been known to be beneficial for general mood, sleep, cognition and more.</p>
            </div>
        </div>
    )
}

export default Mental