import React from 'react'
import './home.css'
// intro img
import introImg from '../../images/intro.png'

function Home() {
  return (
    <div className='home'>
      <div className='home-top'>
        <div className="intro">
          <h1>Welcome to <span className='text-primary'>Insula Health</span></h1>
          <p className='w-75 m-4 lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque asperiores ab temporibus natus earum error, deserunt suscipit aperiam illum mollitia eos quisquam facilis soluta nemo saepe, ipsam, minima quos. Dolorem!</p>
        </div>
        <img src={introImg} alt="Introduction" />
      </div>
    </div>
  )
}

export default Home