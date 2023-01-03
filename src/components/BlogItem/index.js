// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogData

  return (
    <Link to={`/blogs/${id}`}>
      <div className="items">
        <img src={imageUrl} alt={`item${id}`} className="image" />
        <div className="info">
          <p>{topic}</p>
          <h1>{title}</h1>
          <div className="avatar-cont">
            <img src={avatarUrl} alt={`avatar${id}`} className="avatar" />
            <p>{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
