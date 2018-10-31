import React, { Component } from "react";
import API from "../../../utils/postsAPI";
import Jumbo from "../../../components/public/Jumbo";
import Nav from "../../../components/shared/Nav";
import PostCard from "../../../components/public/PostCard";
import Row from "../../../components/shared/grid/Row";
import Col from "../../../components/shared/grid/Col";
import "./Public.css";

class Public extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = () => {
    API.getPosts()
      .then(res => this.setState({ posts: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <Nav isPublic={true} />
        <div className="container">
          <Row>
            <Col size="12" className="grid1">
              <Jumbo />
              {this.state.posts
                .reverse()
                .map(
                  post =>
                    post.isPublished ? (
                      <PostCard {...post} key={this.props._id} isPublic={true} />
                    ) : null
                )}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Public;
