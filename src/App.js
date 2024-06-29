


import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import NewPost from "./NewPost";
import Missing from "./Missing";
import About from "./About";
import { Route, Routes } from "react-router-dom";
import PostPage from "./PostPage";
import EditPost from "./EditPost";
import Footer from "./Footer";
import { DataProvider } from "./context/DataContext";

                    // CHAPTERS: REACT_ROUTER_V6
            // using route,routes ,useNavigate hook from react-router-dom

function App() {

  

  return (
    <div className="App">
      <DataProvider>
        <Header title={"UTOPIA"} />
        <Nav />
        <Routes>
          <Route path="/" element={ <Home />}/>
          <Route path="post"> 
            <Route index element={<NewPost />} />
            <Route path=":id" element={<PostPage />}/>
          </Route>
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="*" element={ <Missing />}/>
          <Route path="about" element={<About />}/>
        </Routes>
        <Footer />
      </DataProvider>

            {/* for learning */}
      {/* <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/postpage">Postpage</Link></li>
        </ul>
      </nav>

       <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/newpost" element={<NewPost />}/>

nested routes and route

        <Route path="/postpage" element={<PostLayout />}>
          <Route index element={<PostPage />}/>
          <Route path=":id" element={<Post />}/>
          <Route path="newpost" element={<NewPost/>}/>
        </Route>

        <Route path="*" element={<Missing />}/>
        use of the * in the path is when some wrote some text in the path ,other than the components, it will direct to this missing page ,it work like Error:404 page
      </Routes> */}
     
    </div>
  );
}
export default App;
