import React from 'react'
import './home.css'
// images
import introImg from '../../images/intro.png'
import mental from '../../images/mental.jpg'
import physical from '../../images/physical.jpg'
import social from '../../images/social.png'
import me from '../../images/profile.jpg'
// react-bootstrap components
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
// links to other pages
import { Link } from 'react-router-dom'

function Home() {
  const pillars = [
    {
      img: mental,
      title: 'Mental',
      text: "Mental wellness comes from feeling balanced, connected to others and ready to meet life's challenges. Mental wellness goes hand-in-hand with your physical health and social relationships."
    },
    {
      img: physical,
      title: 'Physical',
      text: 'Physical fitness is a state of health and well-being as well as the ability to perform aspects of sports, occupations and daily activities. Physical wellness is directly influenced by your mental and social health.'
    },
    {
      img: social,
      title: 'Social',
      text: 'Social health can be defined as our ability to interact and form meaningful relationships with others. Social relationships have an impact on our mental and physical health.'
    }
  ]

  return (
    <div className='home'>
      <div className='home-intro'>
        <div className="intro">
          <h1>Welcome to <span className='text-primary'>Insula Health</span></h1>
          <p className='w-75 m-4 lead'>Insula Health serves as a personal sanctuary where the emphasis is on improving your wellbeing and health. Created by a certified Kinesiology to compose resources, backed by science, proven to improve your wellness across the health triangle – Mental, Physical and Social spheres.</p>
        </div>
        <img src={introImg} alt="Introduction" />
      </div>
      <div className='home-pillars'>
        <h2>3 Wellness Pillars</h2>
        <Container fluid className='pillars'>
          <Row>
            {
              pillars.map(p => {
                return <Col key={p.title}>
                  <Card>
                    <Card.Img variant="top" src={p.img} style={{ height: "250px" }} />
                    <Card.Body>
                      <Card.Title className="pillars-title">{p.title}</Card.Title>
                      <Card.Text className="pillars-text">{p.text}</Card.Text>
                      <Link to={p.title}>
                        <Button>Go to {p.title} Health</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              })
            }
          </Row>
        </Container>
      </div>
      <div className='home-about mt-4'>
        <h2>About Me</h2>
        <div className='about'>
          <img src={me} alt="About me" />
          <p>I am a full stack web developer with an undergrad in Kinesiology. I pursued Kinesiology for my bachelor’s degree because of an innate drive to empower others to experience the physical, social, and mental wellness benefits associated with healthy living. When I started programming, I was very invested in exploring how technology enables and progresses healthcare. My purpose is to utilize my knowledge on important topics such as health, wellness, and performance psychology to write software that strives to make a difference and improve the lives of users. I use the resources located on Insula Health to improve my own health and wellbeing.</p>
        </div>
      </div>
    </div>
  )
}

export default Home