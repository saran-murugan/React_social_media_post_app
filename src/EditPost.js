import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useContext } from "react"
import DataContext from './context/DataContext'

const EditPost = () => {

    const {posts,handleEdit,editBody,setEditBody,editTitle,setEditTitle} = useContext(DataContext)

    const { id } = useParams()
    const post = posts.find(post => (post.id).toString()=== id);

    useEffect(() => {
        if(post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    },[post,setEditTitle,setEditBody])

  return (
    <main className='NewPost'>
        {editTitle && 
            <>
                <h2>Edit Post</h2>
                <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="postTitle">Title:</label>
                    <input 
                        id='postTitle' 
                        type='text' 
                        required 
                        value={editTitle} 
                        onChange={(e) => setEditTitle(e.target.value)}
                    />
                    <label htmlFor="postBody">Post:</label>
                    <input 
                        id='postBody'
                        type="text" 
                        required 
                        value={editBody} 
                        onChange={(e) => setEditBody(e.target.value)} 
                    />
                    <button 
                        onClick={(e)=>handleEdit(post.id)}
                        type='submit'>
                            Submit
                    </button>
                </form>
            </>
            }
            {!editTitle && 
                <>
                    <h2>Page Not Found</h2>
                    <p>Well, that's dissappointing</p>
                   <Link to='/'><p>Visit Our Homepage</p></Link> 
                </>
            }
    </main>
  )
}

export default EditPost