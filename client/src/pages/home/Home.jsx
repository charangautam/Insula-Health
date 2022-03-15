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
          <p className='w-75 m-4 lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque asperiores ab temporibus natus earum error, deserunt suscipit aperiam illum mollitia eos quisquam facilis soluta nemo saepe, ipsam, minima quos. Dolorem!</p>
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
                  <Card style={{ height: "450px" }}>
                    <Card.Img variant="top" src={p.img} style={{ height: "250px" }} />
                    <Card.Body>
                      <Card.Title className="pillars-title">{p.title}</Card.Title>
                      <Card.Text className="pillars-text">{p.text}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              })
            }
          </Row>
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg" className="m-5">
              Go to posts
            </Button>
          </div>
        </Container>
      </div>
      <div className='home-about'>
        <h2>About Me</h2>
        <div className='about'>
          <img src={me} alt="About me" />
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default Home