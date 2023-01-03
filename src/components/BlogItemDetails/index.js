// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount = () => {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const responseData = await response.json()

    const data = {
      title: responseData.title,
      imageUrl: responseData.image_url,
      content: responseData.content,
      avatarUrl: responseData.avatar_url,
      author: responseData.author,
    }
    this.setState({blogData: data, isLoading: false})
  }

  renderBlogItemDetails = () => {
    const {blogData} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogData
    return (
      <div className="blog-item-cont">
        <h2>{title}</h2>
        <div className="avatar-cont">
          <img src={avatarUrl} alt={author} className="avatar" />
          <p>{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="image1" />
        <p>{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}
export default BlogItemDetails
