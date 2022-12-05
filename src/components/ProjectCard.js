import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from "react";

class ProjectCard extends React.Component {
    render() {
    return(
        <Card className='card' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.image} />
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <a href={this.props.link} target="_blank" rel='noreferrer'>
          <Button variant="primary">Take a Look!</Button>
          </a>
        </Card.Body>
      </Card>
    );
    }

}

export default ProjectCard;