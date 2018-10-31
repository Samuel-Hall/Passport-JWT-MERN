import React, { Component } from "react";
import Row from "../../shared/grid/Row";
import Col from "../../shared/grid/Col";
import PostEditForm from "../../PostEditForm";
import "./PostCard.css";

export default class PostCard extends Component {
  state = {
    editPost: false
  };

  handleEditButton = () => {
    if (this.state.editPost === false) {
      this.setState({ editPost: true });
    } else {
      this.setState({ editPost: false });
    }
  };

  render() {
    return (
      <div className="pCard">
      {!this.state.editPost ?  
      <div>
      <h5>{this.props.title}</h5>
      <Row>
        <Col size="12">Tags: {this.props.tags.join(", ")}</Col>
      </Row>
      <Row>
        <Col size="8">
          <p>{this.props.summary}</p>
        </Col>
        <Col size="4">
          <button className="btn" onClick={this.handleEditButton}>Edit Post</button>
        </Col>
      </Row> 
      </div> :
    <Row>
    <PostEditForm {...this.props} 
    closeEdit={this.handleEditButton} 
    />
    </Row>}
     
    
    </div>
    );
  }
}
