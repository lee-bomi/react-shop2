/* eslint-disable */
import './App.css';
import {useState} from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import data from './data.js';

function App() {

    let [shoes, shoes변경] = useState(data)
    let [반복, 반복변경] = useState(true);

  return (
    <div className="App">
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">ABC Mart</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

      <div>
        <div className="door">
            <h2>Hello, ohgu</h2>
            <p>Hello baby, my name is emma. I'm your mom:)</p>
            <p>Happy birthday my baby, I hope your healthy and happy!</p>
            <Button variant="warning">Chop</Button>
        </div>
      </div>

      <div>
        <div className="container">
            <div className="row">

                {
                    shoes.map( (a, i)=>{
                       return <Card shoes={shoes[i]} i={i} key={i}></Card>
                    })
                }

                <div className="col-md-4">
                    <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="100%" />
                    <h4>상품명</h4>
                    <p>상품설명 & 가격</p>
                </div>
                <div className="col-md-4">
                    <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="100%" />
                    <h4>상품명</h4>
                    <p>상품설명 & 가격</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

function Card(props) {
    return (
        <div className="col-md-4">
            <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i+1) +'.jpg'} width="100%" />
            <h4 >{props.shoes.title}</h4>
            <p>{props.shoes.content}</p>
            <p>{props.shoes.price}</p>
        </div>
    )
}

export default App;
