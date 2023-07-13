import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./views/Home"
import  "./index.css";
import Search from "./views/Search";
import Add from "./views/Add";
import Edit from "./views/Edit";
import EditImage from "./views/EditImage";
import Login from "./views/Login";
import Register from "./views/Register";
import Dashboard from "./views/Dashboard";
import PostId from "./views/PostId";


function App() {
 
  return (
    <>
      <BrowserRouter>
         
      <Routes>
        
          <Route path="/" element={<Home/>}/>

          <Route path="/search" element={<Search/>}/>
          
          <Route path="/add" element={<Add/>}/>
          <Route path="/edit/:id" element={<Edit/>}/>
          <Route path="/edit-image/:id" element={<EditImage/>}/>
          
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>

          <Route path="/dashboard" element={<Dashboard/>}/>
         
          <Route path="/post/:id" element={<PostId/>}/>


      </Routes>
       
      </BrowserRouter>
    </>
  )
}

export default App
