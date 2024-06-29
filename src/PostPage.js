
import { Link, useParams } from 'react-router-dom'
import { useContext } from "react"
import DataContext from './context/DataContext';

const PostPage = () => {

   const {posts,handleDelete} = useContext(DataContext)

  const {id} = useParams();
  const post = posts.find(post => (post.id).toString() === id);

  return (
    <main className='PostPage'>
      <article className='post'>
        {post && 
        <>
          <h2>{post.title}</h2>
          <p className='PostDate'>{post.datetime}</p>
          <p className='postBody'>{post.body}</p>

          <Link to={`/edit/${post.id}`}><button className='editButton'>Edit Post</button>
          </Link>
          <button onClick={()=>handleDelete(post.id)} className='deleteButton'>
            Delete post
          </button>
        </>
        }
        {!post && 
        <>
          <h2>Page Not Found</h2>
          <p>Well, that's dissappointing</p>
          <Link to='/'><p>Visit Our Homepage</p></Link> 
        </>}
      </article>
    </main>
  )
}

export default PostPage