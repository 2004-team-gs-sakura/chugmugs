import React from 'react'
import {
  Container,
  Row,
  Col,
  Carousel,
  Image,
  Jumbotron,
  Button
} from 'react-bootstrap'

const GeneralHomepage = () => {
  return (
    <Container fluid>
      <Jumbotron>
        <h1>Welcome to ChugMugs!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary" href="/mugs">
            Browse Mugs
          </Button>
        </p>
      </Jumbotron>
      <Row>
        <Col>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://blogmedia.dealerfire.com/wp-content/uploads/sites/997/2018/09/aerial-overhaed-view-of-various-cup-and-mugs-of-coffee-and-tea_b.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://blogmedia.dealerfire.com/wp-content/uploads/sites/997/2018/09/aerial-overhaed-view-of-various-cup-and-mugs-of-coffee-and-tea_b.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://blogmedia.dealerfire.com/wp-content/uploads/sites/997/2018/09/aerial-overhaed-view-of-various-cup-and-mugs-of-coffee-and-tea_b.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <p> Heres our Bestsellers</p>
      <Row>
        <Col xs={6} md={4}>
          <Image
            src="https://i.etsystatic.com/19238805/r/il/ac0222/1779663540/il_794xN.1779663540_6h3p.jpg"
            thumbnail
          />
        </Col>
        <Col xs={6} md={4}>
          <Image
            src="https://i.etsystatic.com/19238805/r/il/0e0cc5/1779655278/il_794xN.1779655278_lf6d.jpg"
            thumbnail
          />
        </Col>
        <Col xs={6} md={4}>
          <Image
            src="https://i.etsystatic.com/19238805/r/il/609730/1779655422/il_794xN.1779655422_2lvd.jpg"
            thumbnail
          />
        </Col>
      </Row>
    </Container>
  )
}
export default GeneralHomepage
