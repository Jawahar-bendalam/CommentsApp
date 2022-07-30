// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetail, deleteComment, toggleLikeButton} = props
  const {name, comment, id, isLiked, date, intialClassName} = commentDetail
  const initial = name[0]
  const likeTextClassName = isLiked ? 'button active' : 'button'
  const likeImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const time = formatDistanceToNow(date)

  const onDeleteClick = () => {
    deleteComment(id)
  }

  const onLikeClick = () => {
    toggleLikeButton(id)
  }

  return (
    <li className="comment-item">
      <div className="comment-container">
        <div className={intialClassName}>
          <p className="initial">{initial}</p>
        </div>
        <div>
          <div className="username-time-container">
            <p className="username">{name}</p>
            <p className="time">{time}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="buttons-container">
        <div className="like-container">
          <img src={likeImage} alt="like" className="like-image" />
          <button
            type="button"
            onClick={onLikeClick}
            className={likeTextClassName}
          >
            Like
          </button>
        </div>
        <button
          className="button"
          type="button"
          testid="delete"
          onClick={onDeleteClick}
        >
          <img
            className="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="comment-line" />
    </li>
  )
}

export default CommentItem
