import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


//Membuat stateless component yang nanti akan dipanggil dengan props
const NavLink = (props) => {
  return (
    <>
      <Nav.Link as={Link} to ={props.url} className="nav-link">{props.name}</Nav.Link>
    </>
  )
}

//memastikan name dan link berbentuk string
NavLink.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

//Membuat nama dan link dari navbar sesuai yang diinginkan
class Navigation extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
       <Container>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
           <Nav className="container-fluid">
             <NavLink name="QTemu" url="/" />
             <NavLink name="Create Meetup" url="/create-meetup" />
             <NavLink name="Explore" url="/explore" />
             <NavLink name="Login" url="/login" />
           </Nav>
         </Navbar.Collapse>
       </Container>
     </Navbar>
    )
  }
}


// function Navigation() {
//   return (
//     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//       <Container>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="container-fluid">
//             <Nav.Link as={Link} to ="/" className="nav-link text-first">QTemu</Nav.Link>
//             <Nav.Link as={Link} to ="/create-meetup" className="nav-link">Create Meetup</Nav.Link>
//             <Nav.Link as={Link} to ="/explore" className="nav-link">Explore</Nav.Link>
//             <Nav.Link as={Link} to ="/login" className="login-right">Login</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

export default Navigation;