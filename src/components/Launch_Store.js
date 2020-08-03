import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import '../App.css'
// import { Transaction } from './Transaction'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Button  } from 'react-bootstrap'
import {
    Card, CardImg, CardBody,
    CardTitle
  } from 'reactstrap';
export const LaunchStore = () => {
  const { shoes } = useContext(GlobalContext);
  // console.log(shoes)
  // console.log(shoes.name)
    return (
        <div>          
    <Container>
     
      <Row>
        {Object.entries(shoes).map(([slug, { name, img, price }]) => (
       <Col sm="12" lg="4" key={slug}  className="mt-5 justify-content-md-center">
        
       <Card>
       <CardImg top width="100%" src={img} alt={name} />
        <CardBody color="info">
          <CardTitle>{name}</CardTitle>
          {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
          {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
          <Link to={`/launch/${slug}`}>
        <p>{price}</p>
          <Button className="btn btn-primary">Buy Now</Button>
          </Link>
        </CardBody>
      </Card>
    </Col>
    
 ))}
   </Row>
     </Container>

</div>
    )
}
