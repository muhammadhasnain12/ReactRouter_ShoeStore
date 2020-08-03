import React  from 'react'
// import { GlobalContext } from '../context/GlobalState'
import { Footer } from './Footer'
import { Container, Row, Col, Button } from 'reactstrap';
import '../App.css'
export const Balanace = () => {
    // const { transactions } = useContext(GlobalContext);
    // const amounts = transactions.map(transaction => transaction.amount);
    // console.log(amounts);
    // const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <div>
            <div>
            <h2 className="p-3 text-white mt-5 text-justify text-left" style={{fontSize: '50px'}}>Welcome to Nike 
            <br/>
            Pakistan Branch</h2>
            </div>
            <div style={{ position: 'relative', top: '7rem' }}>

            <Container>

                <Row>
                    <Col xs="12" md="12" className="mt-5">
                        <h1>About <span><img src="https://pngimg.com/uploads/nike/nike_PNG11.png" alt="nike" style={{ width: '4rem', color: 'white' }} /></span></h1>
                    </Col>
                    <Col xs="12" md="6" className="mt-3">
                        <p className="text-justify">
                            Nike Factory Store in Wisconsin Nike, Inc. it is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear,
                            apparel, equipment, accessories, and services. The company is headquartered near Beaverton, Oregon, in the Portland metropolitan area. It is the world's largest supplier of athletic shoes and
                            apparel and a major manufacturer of sports equipment, with revenue in excess of US$24.1 billion in its fiscal year 2012 (ending May 31, 2012). As of 2012, it employed more than 44,000 people worldwide.
                            In 2014 the brand alone was valued at $19 billion, making it the most valuable brand among sports businesses. As of 2017, the Nike brand is valued at $29.6 billion. Nike ranked No. 89 in the 2018 Fortune 500 list of the largest United States corporations by total revenue.
                            The company was founded on January 25, 1964, as Blue Ribbon Sports, by Bill Bowerman and Phil Knight, and officially became Nike, Inc. on May 30, 1971. The company takes its name from Nike, the Greek goddess of victory.Nike markets its products under its own brand, as well as Nike Golf,
                            Nike Pro, Nike+, Air Jordan, Nike Blazers, Air Force 1, Nike Dunk, Air Max, Foamposite, Nike Skateboarding, Nike CR7, and subsidiaries including Brand Jordan, and Converse. Nike also owned Bauer Hockey (later renamed Nike Bauer) from 1995 to 2008, and previously owned Cole Haan Umbro,
                            and Hurley International.In addition to manufacturing sportswear and equipment, the company operates retail stores under the Niketown name. Nike sponsors many high-profile athletes and sports teams around the world, with the highly recognized trademarks of "Just Do It" and the Swoosh logo.
                            For More Information kindly visit our online store.
                            <br />
                            <Button href="/launch" to='/launch' className="btn btn-success mt-4 text-white">Shop</Button>

                        </p>
                    </Col>
                    <Col xs="12" md="6" className="mt-5">
                        <img src="https://cdn.britannica.com/50/213250-050-02322AA8/Nike-logo.jpg" alt="Nike" style={{ width: '100%' }} />
                    </Col>
                    {/* <Col xs={12} className="mt-2">
                    <Footer/>
                    </Col> */}

                </Row>
            </Container>
            <Footer/>
            </div>
        </div>
    )
}

