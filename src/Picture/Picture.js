import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';

class Picture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: 'https://picsum.photos/300/300/?image=' + props.picsumId,
            key: props.imageKey
        }
    }

    componentWillMount = () => {
        console.log('component will mount');
    }

    componentDidMount = () => {
        console.log('component mounted');
    }

    componentWillReceiveProps = (nextProps) => {
        console.log('component will receive props');
        console.log(nextProps);
        this.setState({
            url: 'https://picsum.photos/100/100/?image=' + nextProps.picsumId,
            key: nextProps.imageKey 
        })
    }

    shouldComponentUpdate = () => {
        console.log('component should update');
        return true;
    }

    componentWillUpdate = () => {
        console.log('component will update');
    }

    componentDidUpdate = () => {
        console.log('component updated');
    }

    componentWillUnmount = () => {
        console.log('component unmounted');
    }

    removePicture = (event) => {
        event.preventDefault();

    }

    updatePicture = (event) => {
        event.preventDefault();

    }


    render() {
        return (
            <Col md="3">
                <Row>
                    <Col>
                    <Button className="buttons" size="sm" color="primary" onClick={this.props.removePicture}>X Component</Button>
                    <Button className="buttons" color="primary" size="sm" onClick={this.props.updatePicture}>+ New Image</Button>
                    </Col>
                </Row>
            <div class="image">
                <img src={this.state.url} className="img-fluid" key={this.state.key} />
            </div>
            </Col>
        )
    }

}

export default Picture;