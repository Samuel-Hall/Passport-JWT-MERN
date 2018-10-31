import React from "react";
import { EditorState, RichUtils, convertToRaw } from "draft-js";
import Editor from "draft-js-plugins-editor";
import { stateToHTML } from "draft-js-export-html";
import { stateFromHTML } from "draft-js-import-html";
import ProjectsAPI from "../../utils/projectsAPI";
import PostsAPI from "../../utils/postsAPI";
import createLinkifyPlugin from "draft-js-linkify-plugin";
import { Row, Col, Input } from "react-materialize";
import "./PostEditForm.css";

const linkifyPlugin = createLinkifyPlugin();
const plugins = [linkifyPlugin];

class PostEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      url: "",
      projects: [],
      posts: [],
      project: {
        title: "",
        status: "",
        summary: "",
        funds: ""
      },
      task: {
        title: "",
        description: "",
        funds: "",
        project: ""
      },
      post: {
        title: "",
        summary: "",
        content: "",
        author: "",
        tags: [],
        currentTag: "",
        isPublished: false,
        project: ""
      }
    };
  }

  componentDidMount() {
    this.setState({
      post: {
        ...this.props
      },
      editorState: EditorState.createWithContent(
        stateFromHTML(this.props.content)
      )
    });
    this.loadPosts();
  }

  loadProjects = () => {
    ProjectsAPI.getProjects()
      .then(res =>
        this.setState({
          projects: res.data
        })
      )
      .catch(err => console.log(err));
  };

  loadPosts = () => {
    PostsAPI.getPosts()
      .then(res =>
        this.setState({
          posts: res.data
        })
      )
      .catch(err => console.log(err));
  };

  onChange = editorState => {
    this.setState({
      editorState
    });
  };

  handleKeyCommand = command => {
    const newState = RichUtils.handleKeyCommand(
      this.state.editorState,
      command
    );
    if (newState) {
      this.onChange(newState);
      return "handled";
    }
    return "not-handled";
  };

  onUnderlineClick = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "UNDERLINE")
    );
  };

  onBoldClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
  };

  onItalicClick = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC")
    );
  };

  onH1Click = () => {
    this.onChange(
      RichUtils.toggleBlockType(this.state.editorState, "header-one")
    );
  };
  onH2Click = () => {
    const contentState = this.state.editorState.getCurrentContent();
    this.onChange(
      RichUtils.toggleBlockType(this.state.editorState, "header-two")
    );
  };
  onH3Click = () => {
    this.onChange(
      RichUtils.toggleBlockType(this.state.editorState, "header-three")
    );
  };

  onLinkClick = () => {
    const contentState = this.state.editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      "LINK",
      "MUTABLE",
      { url: this.state.url }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(this.state.editorState, {
      currentContent: contentStateWithEntity
    });
    this.setState({
      editorState: RichUtils.toggleLink(
        newEditorState,
        newEditorState.getSelection(),
        entityKey
      ),
      url: ""
    });
  };

  // Post Functions
  handlePostInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      post: {
        ...this.state.post,
        [name]: value
      }
    });
  };

  handleUrlChange = event => {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  handlePostTagSubmit = event => {
    event.preventDefault();
    if (this.state.post.currentTag) {
      this.setState({
        post: {
          ...this.state.post,
          tags: [...this.state.post.tags, this.state.post.currentTag]
        }
      });
    }
  };

  handlePostEditFormSubmit = event => {
    event.preventDefault();

    const contentState = this.state.editorState.getCurrentContent();

    if (
      this.state.post.title &&
      this.state.post.summary &&
      contentState.hasText() &&
      this.state.post.author
    ) {
      const content = stateToHTML(contentState);

      PostsAPI.updatePost(this.props._id, {
        title: this.state.post.title,
        summary: this.state.post.summary,
        author: this.props.author,
        content: content,
        tags: this.state.post.tags,
        isPublished: this.state.post.isPublished
      })
        .then(res => {
          this.props.closeEdit();
          this.loadPosts();
          this.props.loadCurrentProject(this.props.projectID);
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <div className="form-group">
          <input
            className="form-control"
            value={this.state.post.title}
            onChange={this.handlePostInputChange}
            name="title"
            placeholder="Title (required)"
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            value={this.state.post.summary}
            onChange={this.handlePostInputChange}
            name="summary"
            placeholder="Summary (required)"
          />
        </div>
        Content:
        <div className="editorContainer">
          <div className="toolbar">
            <button className="btn" onClick={this.onUnderlineClick}>
              <u>U</u>
            </button>
            <button className="btn" onClick={this.onBoldClick}>
              <b>B</b>
            </button>
            <button className="btn" onClick={this.onItalicClick}>
              <em>I</em>
            </button>
            <button className="btn" onClick={this.onH1Click}>
              H1
            </button>
            <button className="btn" onClick={this.onH2Click}>
              H2
            </button>
            <button className="btn" onClick={this.onH3Click}>
              H3
            </button>
            <Row>
              <Col s={8}>
                <input
                  className="form-control"
                  value={this.state.url}
                  onChange={this.handleUrlChange}
                  name="url"
                  placeholder="https://www.yoururl.com"
                />
              </Col>
              <Col s={4}>
                <button onClick={this.onLinkClick} className="btn">
                  Add Link
                </button>
              </Col>
            </Row>
          </div>
          <div className="editors">
            <Editor
              editorState={this.state.editorState}
              handleKeyCommand={this.handleKeyCommand}
              onChange={this.onChange}
              plugins={plugins}
              ref={element => {
                this.editor = element;
              }}
            />
          </div>
        </div>
        <div>Tags: {this.state.post.tags.join(", ")}</div>
        <Row>
          <Col s={8}>
            <input
              className="form-control"
              value={this.state.post.currentTag}
              onChange={this.handlePostInputChange}
              name="currentTag"
              placeholder="Add tag (optional)"
            />
          </Col>
          <Col s={4}>
            <button
              disabled={!this.state.post.currentTag}
              onClick={this.handlePostTagSubmit}
              style={{ float: "right", marginBottom: 10 }}
              className="btn btn-success"
            >
              Submit Tag
            </button>
          </Col>
        </Row>
        <div className="form-group">
          <Row>
            <Input
              name="isPublished"
              type="radio"
              value={true}
              checked={this.state.post.isPublished === true}
              onChange={this.handlePostInputChange}
              label="Published"
            />
            <Input
              name="isPublished"
              type="radio"
              value={false}
              checked={this.state.post.isPublished === false}
              onChange={this.handlePostInputChange}
              label="Not Published"
            />
          </Row>
        </div>
        <button
          disabled={
            !(
              this.state.post.title &&
              this.state.post.summary &&
              this.state.editorState.getCurrentContent().hasText() &&
              this.state.post.author
            )
          }
          onClick={this.handlePostEditFormSubmit}
          style={{ float: "right", marginBottom: 10 }}
          className="btn btn-success"
        >
          Edit Post
        </button>
        <button
          onClick={this.props.closeEdit}
          style={{ float: "right", marginBottom: 10 }}
          className="btn btn-success"
        >
          Cancel
        </button>
      </div>
    );
  }
}

export default PostEditForm;
