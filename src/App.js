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
import Create  from './components/create';


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
                <Nav.Link href="/myrecipes">My Recipes</Nav.Link> {/*read*/}
                <Nav.Link href="/create">Add Recipes</Nav.Link> {/*create*/}
              </Nav>
              <Nav>
                <Nav.Link href="#deets">Something</Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/create' element={<Create></Create>}></Route> {/*component added to nav bar , when clicked brings to NewRecipe.js*/}

        </Routes>
      </div>
    </BrowserRouter>
  );

}
export default App;
