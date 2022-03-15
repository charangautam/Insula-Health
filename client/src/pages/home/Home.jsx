import React from 'react'
import './home.css'
// images
import introImg from '../../images/intro.png'
import mentalWellness from '../../images/mental.jpg'
// react-bootstrap components
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

function Home() {
  const products = [
    {
      img: mentalWellness,
      title: 'Mental Wellness',
      text: "Mental wellness comes from feeling balanced, connected to others and ready to meet life's challenges. Mental wellness goes hand-in-hand with physical health."
    },
    {
      img: 'https://via.placeholder.com/150',
      title: 'Physical Fitness',
      text: 'Improve and develop your mental strength through science proven methods. Increase your level of ividual resilience and confidence.'
    },
    {
      img: 'https://via.placeholder.com/150',
      title: 'Mental Fortite',
      text: 'Improve and develop your mental strength through science proven methods. Increase your level of ividual resilience and confidence.'
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
        <h2>Recent Posts</h2>
        <Container fluid className='products'>
          <Row>
            {
              products.map(p => {
                return <Col key={p.title}>
                  <Card>
                    <Card.Img variant="top" src={p.img} />
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