import React, { Component } from "react";
import Nav from "../../../components/shared/Nav";
import Row from "../../../components/shared/grid/Row";
import Col from "../../../components/shared/grid/Col";
import API from "../../../utils/postsAPI";
import { Link } from "react-router-dom";
import renderHTML from "react-render-html";
import "./PostDetail.css";

class Private extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {}
    };
  }

  // When this component mounts, grab the Post with the _id of this.props.match.params.id
  // e.g. localhost:3000/posts/599dcb67f0f16317844583fc

  componentWillMount() {
    API.getPost(this.props.match.params.id)
      .then(res =>
        this.setState({
          post: {
            title: res.data.title,
            summary: res.data.summary,
            content: res.data.content
          }
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Nav isPublic={true} />
        <div className="container postDeets">
          <Row>
            <Col size="12">
              <h1>{this.state.post.title}</h1>
              <h6>{this.state.post.summary}</h6>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col size="10">
              <article>
                {this.state.post.content
                  ? renderHTML(this.state.post.content)
                  : null}
              </article>
            </Col>
          </Row>
          <Row>
            <Col size="2">
              <Link to="/">← Back to Posts</Link>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Private;
