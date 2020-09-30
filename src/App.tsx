import React from "react";
import Post from "./components/post/Index";
import PostModel from "./models/post-model";
import "./app.css";

const postData: PostModel = {
  id: 15,
  author: "fabiotrech",
  authorAvatarUrl: "https://via.placeholder.com/32",
  creationDate: new Date(2020, 8, 30),
  imageUrl: "https://via.placeholder.com/615",
  likesCount: 16,
  message: "Elit veniam cillum voluptate commodo sint cillum est eiusmod duis.",
  comments: [],
};

function App() {
  return (
    <div>
      <Post {...postData}></Post>
    </div>
  );
}

export default App;
