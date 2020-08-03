import React from 'react'
import { Row, Col } from 'react-bootstrap';
export const Footer = () => {

    return (
        <div style={{ marginTop: '100px' }}>
         {/* <Container className="bg-dark">
             <Row>
                 <Col xs={12}>
                     <h1>All Rights Reserved by <a href="https://muhammadhasnain.tk">Muhammad Hasnain</a></h1>
                 </Col>
             </Row>
         </Container> */}
            <div className="container-fluid bg-dark mt-5 text-left" id="contact">
                <Row className="text-white">
                    <Col xs="12" md="4">

                        <ul className="list-inline mt-5 ml-2">
                            <p>Pakistan Office</p>
          <p className="widget-title line-bottom" style={{ backgroundColor: 'green', height: '3px', width: '40px' }}></p>
         <p>
          A-25, Blue Area
          ISLAMABAD, Pakistan
          </p>
                            <li className="m-0 pl-5"> UAN: 111-729-526 </li>
                            <li className="m-0 pl-5"> (+0092-213) 4130786-90
          </li>
                            <li className="m-0 pl-5 pr-5">CELL: 92-311-1729526
          </li>
                            <li className="m-0 pl-5 pr-5">USA NO +1(716)941 7792
          </li>
                            <li className="m-0 pl-5 pr-5">UK NO (+44)115 970 6256
          </li>
                            <li className="m-0 pl-5 pr-5">info@nike.com
          </li>
                        </ul>
                    </Col>
                    <Col xs="12" md="4">
                        <p className="mt-5">Useful Links</p>
                        <p className="widget-title line-bottom" style={{ backgroundColor: 'green', height: '3px', width: '40px' }}> </p>
                        
                    </Col>
                    <Col xs="12" md="4">
                        <p className="mt-5">Connect With Us</p>
                        <p className="widget-title line-bottom" style={{ backgroundColor: 'green', height: '3px', width: '40px' }}> </p>
                        <ul style={{listStyle: 'none'}}>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                        </ul>
                        
                    </Col>
                </Row>
            </div>
        </div>
    )
}
