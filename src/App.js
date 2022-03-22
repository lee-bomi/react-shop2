/* eslint-disable */
import './App.css';
import {useContext, useState} from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import data from './data.js';
import { Link, Route, Switch } from "react-router-dom"
import Detail from './Detail';
import axios from 'axios';
import Cart from "./Cart";

//export let 재고context = React.createContext();      //범위지정

function App() {

    let [shoes, shoes변경] = useState(data)
    let [반복, 반복변경] = useState(true);
    let [로딩중, 로딩중변경] = useState(false);
    let [재고, 재고변경] = useState([10,11,12])


  return (
    <div className="App">
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">ABC Mart</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/detail'>Detail</Nav.Link>
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


    <Switch>
        <Route exact path='/'>
            <Jumbotron></Jumbotron>
            <div>
                <div className="container">
                        <div className="row">

                            {
                                shoes.map((a, i)=>{
                                    return (
                                        <Card shoes={shoes[i]} i={i} key={i}></Card>
                                    )
                                })
                            }
                            {
                                로딩중 === true
                                ? <p>로딩중입니다</p>
                                : null
                            }
                        </div>
                </div>
                <button className="btn btn-primary" onClick={()=>{
                    로딩중변경(true)
                    axios.get('https://codingapple1.github.io/shop/data2.json')
                        .then((result) => {
                            shoes변경([...shoes, ...result.data])
                            로딩중변경(false)
                        })
                        .catch(() => {
                            로딩중변경(false)
                        });
                }}>더보기</button>
            </div>
        </Route>

        <Route path='/detail/:id'>
             <Detail shoes={shoes} 재고={재고} 재고변경={재고변경}></Detail>
        </Route>

        <Route path='/cart'>
            <Cart></Cart>
        </Route>

    </Switch>

    </div>
  );
}

function Jumbotron() {
    return (
        <div>
            <div className="door">
                <h2>Hello, ohgu</h2>
                <p>Hello baby, my name is emma. I'm your mom:)</p>
                <p>Happy birthday my baby, I hope your healthy and happy!</p>
                <Button variant="warning">Chop</Button>
            </div>
        </div>
    )
}
function Card(props) {

    //let 재고 = useContext(재고context); //재고context라는 범위를 갖다가 씀
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
