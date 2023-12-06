import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';


function App() {
  return (
    
    <BrowserRouter>

      <div className="App">
      
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
        
          <Container>
          <Col>
          <Image src="" roundedCircle />
        </Col>
            <Navbar.Brand href="/">GoodEats</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/recipes">Recipes</Nav.Link>{/*will be an api with recipes or mongodb database*/}
                <Nav.Link href="/myrecipes">My Recipes</Nav.Link>
                <Nav.Link href="/addrecipes">Add Recipes</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">Something</Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        
      </Routes>
      </div>
    </BrowserRouter>
  );

}
export default App;
