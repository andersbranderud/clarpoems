import Link from 'next/link'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const linkStyle = {
  marginRight: 15
}

const navStyle = {
	marginLeft: 100,
	textAlign: 'center',
	margin: '20px 0 0',
	paddingLeft: '10px',
	fontSize: '18px'
}

const imgStyle = {
	width: '100%',
   borderRadius: '15px'
}


const Header = () => (
    <div>
		<img style={imgStyle} src="/static/images/malvernhillslogowider.jpg"/>
	
            <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Writing">Writing</Nav.Link>
              <NavDropdown title="Writing" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Poems">Poems</NavDropdown.Item>
                <NavDropdown.Item href="#Articles">Articles</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/Contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>;
	</div>
)

export default Header