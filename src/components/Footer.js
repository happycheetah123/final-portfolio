import Nav from 'react-bootstrap/Nav';

function Footer() {
  return (
    <>
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
    </>
  );
}

export default Footer;