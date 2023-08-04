import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image2 from '../img/image2.jpg'

const News = () => {
  return (
  <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image2} width='200px'/>
        <Card.Body>
          <Card.Title>뉴스 제목</Card.Title>
          <Card.Text>
            뉴스 내용
          </Card.Text>
          <Button variant="primary">뉴스로 이동</Button>
        </Card.Body>
        
      </Card>
      
  )
}

export default News