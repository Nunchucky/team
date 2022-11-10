import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/HomePage.module.css";
import { Route, Link } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap'




export const NavBar = () => {
    return(
    <div className={styles.NavBar}>
      <div>
      <Navbar>
        <Container>
          <LinkContainer to='/home'>
          <Navbar.Brand href="#home">
            <span className={styles.s1}>team</span>
            <span className={styles.s2}>.</span>
          </Navbar.Brand>
          </LinkContainer>
        </Container>
      </Navbar>
      </div>
      <div>
        <Nav
            activeKey="/home"
          >
          <LinkContainer to='/products'>
            <Nav.Link eventKey="link-0" className={styles.links}>Products</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/services'>
            <Nav.Link eventKey="link-1" className={styles.links}>Services</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/contact'>
            <Nav.Link eventKey="link-2" className={styles.links}>Contact</Nav.Link>
          </LinkContainer>
          <Nav.Item to=''>
            <Nav.Link eventKey="link-3" className={styles.links}>
              Log In
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Item>
              <Button variant="light" className={styles.btn2}>Get Access</Button>
            </Nav.Item>
          </Nav.Item>
        </Nav>
      </div>
    </div>
    )
}