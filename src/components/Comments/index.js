import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
const InitialCommentList = []

class Comments extends Component {
  state = {commentList: InitialCommentList, name: '', comment: ''}

  onNameChange = event => {
    this.setState({name: event.target.value})
  }

  onCommentChange = event => {
    this.setState({comment: event.target.value})
  }

  addComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      date: new Date(),
      intialClassName: initialBackgroundColorClassName,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
    }))
  }

  deleteComment = id => {
    const {commentList} = this.state
    const filteredList = commentList.filter(
      eachComment => eachComment.id !== id,
    )

    this.setState({commentList: filteredList})
  }

  toggleLikeButton = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  render() {
    const {commentList, name, comment} = this.state
    const count = commentList.length
    return (
      <div className="app-container">
        <div className="comments-container">
          <h1 className="app-heading">Comments</h1>
          <div className="comments-inputs">
            <form onSubmit={this.addComment} className="form">
              <p className="form-description">
                Say something about 4.0 Technologies
              </p>
              <input
                type="text"
                className="name-input"
                placeholder="Your Name"
                onChange={this.onNameChange}
                value={name}
              />
              <textarea
                className="comment-input"
                placeholder="Your Comment"
                onChange={this.onCommentChange}
                value={comment}
                rows="6"
              />
              <button type="submit" className="add-button">
                Add Comment
              </button>
            </form>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
          <hr className="line" />
          <p className="heading">
            <span className="comments-count">{count}</span>
            Comments
          </p>
          <ul className="comments-list">
            {commentList.map(eachComment => (
              <CommentItem
                commentDetail={eachComment}
                key={eachComment.id}
                deleteComment={this.deleteComment}
                toggleLikeButton={this.toggleLikeButton}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
