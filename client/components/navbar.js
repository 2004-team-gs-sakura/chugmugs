import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store/user'
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from 'react-bootstrap'

const NavigationBar = ({handleClick, isLoggedIn}) => (
  <Navbar bg="light" expand="lg" sticky="top">
    <Navbar.Brand href="/">ChugMugs</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NavDropdown title="Settings" id="basic-nav-dropdown">
          <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
          <NavDropdown.Item href="/login">Login</NavDropdown.Item>
          <NavDropdown.Item href="/cart">Cart</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      {isLoggedIn ? (
        <Nav.Link href="/" onClick={handleClick}>
          Logout
        </Nav.Link>
      ) : (
        (<Nav.Link href="/signup">Sign Up</Nav.Link>,
        <Nav.Link href="/login">Login</Nav.Link>)
      )}
      <Nav.Link href="/mugs">Browse Mugs</Nav.Link>
      <Nav.Link href="/cart">Go to Cart</Nav.Link>
    </Navbar.Collapse>
  </Navbar>
  // <div>
  //   <h1>ChugMugs</h1>
  //   <nav>
  //     {isLoggedIn ? (
  //       <div>
  //         {/* The navbar will show these links after you log in */}
  //         <Link to="/home">Home</Link>
  //         <a href="#" onClick={handleClick}>
  //           Logout
  //         </a>
  //       </div>
  //     ) : (
  //       <div>
  //         {/* The navbar will show these links before you log in */}
  //         <Link to="/login">Login</Link>
  //         <Link to="/signup">Sign Up</Link>
  //       </div>
  //     )}
  //     <div>
  //       <Link to="/mugs">Browse Mugs</Link>
  //       <Link to="/cart">Cart</Link>
  //     </div>
  //   </nav>
  //   <hr />
  // </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(NavigationBar)

/**
 * PROP TYPES
 */
NavigationBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
