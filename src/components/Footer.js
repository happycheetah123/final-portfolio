import Nav from 'react-bootstrap/Nav';

function Footer() {
  return (
    <div className='footer'>
      <h1>Want to learn more?</h1>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Resume</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">LinkedIn</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Email</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Footer;