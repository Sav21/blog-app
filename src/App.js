import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddPost from "./components/AddPost";
import AppPosts from "./components/AppPosts";
import SinglePost from "./components/SinglePost";
import Welcome from "./components/Welcome";
import Edit from "./pages/Edit";

function App() {
  return (
    <Routes>
      <Route index element={<Welcome />}></Route>
      <Route path="/posts" element={<AppPosts />}></Route>
      <Route path="/posts/:id" element={<SinglePost />}></Route>
      <Route path="/edit/:id" element={<Edit />}></Route>
      <Route path="/add" element={<AddPost />}></Route>
    </Routes>
  );
}

export default App;
