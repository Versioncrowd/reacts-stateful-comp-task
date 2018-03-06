import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import './App.css';
import Picture from './Picture/Picture';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imagearray: []
        }
    }


  addImageComponent = (event) => {
    const imageComArray = [...this.state.imagearray];
    let picsumId = null; 
    picsumId = Math.floor(Math.random() * 1000);

    const imageObj = {
      picsumId: picsumId,
      imageKey: picsumId
    };
    
    imageComArray.push(imageObj)

    this.setState({
      imagearray: imageComArray
    })
  }

  removePicture = (index) => {
    console.log(index);
    const imageComArray = [...this.state.imagearray];
    imageComArray.splice(index, 1);

    this.setState({
      imagearray: imageComArray
    })
  }

  updatePicture = (index) => {
    console.log(index);
    let imageComArray = [...this.state.imagearray];
    const random = Math.floor(Math.random() * 1000);
    imageComArray[index].picsumId = random;
    imageComArray[index].imageKey = random;
    
    this.setState({
      imagearray: imageComArray
    })
  }
   
  render() {

    const root = {
      marginTop: '15px'
    }

    return (
      <div style={root}>
        <Container>
          <Row>
            <Col xs="9">
              <h4>Another Picsum Example</h4>
            </Col>
          </Row>
          <Row className="loaderbutton">
            <Col xs="3">
              <Button color="primary" onClick={this.addImageComponent}>New Image</Button>
            </Col>
          </Row>
          <Row>
            {
              this.state.imagearray.map((imageObj, index) => {
                return <Picture 
                  picsumId={imageObj.picsumId} 
                  imageKey={imageObj.imageKey} 
                  removePicture = {() => {this.removePicture(index)}}
                  updatePicture = {() => {this.updatePicture(index)}}
                  />})
            }
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;