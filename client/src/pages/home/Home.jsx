import React from 'react'
import './home.css'
// images
import introImg from '../../images/intro.png'
import mental from '../../images/mental.jpg'
import physical from '../../images/physical.jpg'
import social from '../../images/social.png'

// react-bootstrap components
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

function Home() {
  const products = [
    {
      img: mental,
      title: 'Mental',
      text: "Mental wellness comes from feeling balanced, connected to others and ready to meet life's challenges. Mental wellness goes hand-in-hand with physical health."
    },
    {
      img: physical,
      title: 'Physical',
      text: 'Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, occupations and daily activities.'
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
      <div className='home-products'>
        <h2 className="m-5">Wellness Products</h2>
        <Container fluid className='products'>
          <Row>
            {
              products.map(p => {
                return <Col key={p.title}>
                  <Card>
                    <Card.Img variant="top" src={p.img} style={{ height: "250px" }} />
                    <Card.Body>
                      <Card.Title>{p.title}</Card.Title>
                      <Card.Text>{p.text}</Card.Text>
                      <Button variant="primary">Go to posts</Button>
                    </Card.Body>
                  </Card>
                </Col>
              })
            }
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Home