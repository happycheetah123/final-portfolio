import Button from 'react-bootstrap/Button';
import React from "react";

class ProjectCard extends React.Component {
    render() {
    return(
        <div className='ProjectCard'>
            <img className='ProjectImage' src={process.env.PUBLIC_URL + this.props.image} alt={this.props.image}></img>
            <a className='ProjectTitle' href={this.props.link} target="_blank" rel='noreferrer'>
                <Button variant="outline-dark" size="lg">{this.props.name}</Button>
            </a>
            <h5 className='ProjectBody'>{this.props.description}</h5>

        </div>

    );
    }

}

export default ProjectCard;