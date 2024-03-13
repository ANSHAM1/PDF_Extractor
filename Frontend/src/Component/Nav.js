import Nav from 'react-bootstrap/Nav';

function Navbar() {
  return (
    <div className='navbar1' id='home'>
      <Nav fill variant="tabs" className='Color'>
        <Nav.Item>
          <Nav.Link href="#Home"  className='navitems'>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='#know' eventKey="link-1" className='navitems'>About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='#use' eventKey="link-2" className='navitems'>Use</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='#Contact' className='navitems'>CONTACT US</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Navbar;