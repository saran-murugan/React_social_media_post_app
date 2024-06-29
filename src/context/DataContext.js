import { createContext} from 'react'
import { useEffect, useState } from "react";
import api from "../api/posts"
import { format } from "date-fns"
import useWindowSize from "../hooks/useWindowSize";
import { useNavigate } from 'react-router-dom';


            /* this context method is used for code readability and use of same value in different components while prop drilling
            -> the values inserted here can be used in other components using useContext hook with this file name as parameter */

const DataContext = createContext({})

export const DataProvider = ({children}) => {

    const [posts,setPosts] = useState([])

  const [search,setSearch] = useState('')

  const [searchResults,setSearchResults] = useState([])
  const [postTitle,setPostTitle] = useState('')

  const [postBody,setPostBody] = useState('')
  const[editTitle,setEditTitle] = useState('')
  const[editBody,setEditBody] = useState('')

  const navigate = useNavigate();

  const {width} = useWindowSize();


  useEffect(()=>{
    const fetchPosts = async () =>{
      try{
        const response =await api.get("/posts");
        setPosts(response.data);
      } catch (err){
        if(err.response) {
          console.log(err.response.data)
          console.log(err.response.status)
          console.log(err.response.headers)
        } else {
          console.log(`Error: ${err.message}`)
        }
      }
    }
    fetchPosts();
  },[])

  
useEffect(() => {
  const filteredResults = posts.filter((post) => (
    (post.body.toLowerCase()).includes(search.toLowerCase()) 
    || 
    (post.title.toLowerCase()).includes(search.toLowerCase())
  ));
  setSearchResults(filteredResults.reverse())
},[posts,search])


const handleSubmit = async (e)=>{

  e.preventDefault();
  const setId = posts.length ? Number(posts[posts.length-1].id) + 1 : 1;
  const id = setId.toString();
  const datetime = format(new Date(), 'MMMM dd, yyyy pp');
  const newPost = {id: id ,title: postTitle,datetime, body: postBody};
  const apiPost = await api.post('/posts',newPost);
  const allPosts = [...posts,apiPost.data];
  setPosts(allPosts);
  setPostTitle('');
  setPostBody('');
  navigate('/');

}


const handleEdit = async (id)=> {

  const datetime = format(new Date(), 'MMMM dd, yyyy pp');
  const updatedPost = {id: id ,title: editTitle,datetime, body: editBody};
  try{
    const response = await api.put(`/posts/${id}`, updatedPost)
    setPosts(posts.map(post => post.id ===id ? {...response.data} : post));
    setPostTitle('');
    setPostBody('');
    navigate('/');
  } catch(err) {
    console.log(`Error: ${err.message}`)
  }
}

  const handleDelete = async (id)=>{
    try{
      await api.delete(`posts/${id}`)
      const postList = posts.filter(post => post.id !==id);
      setPosts(postList);
      navigate('/');
    } catch(err){
      console.log(`Error: ${err.message}`)
    }
  } 

    return (
        <DataContext.Provider value={{
            width,search,setSearch,searchResults,handleSubmit, postTitle, setPostTitle, postBody, setPostBody,posts,handleDelete,handleEdit,editBody,setEditBody,editTitle,setEditTitle
        }} >
            {children}
        </DataContext.Provider>
    )
}

export default DataContext