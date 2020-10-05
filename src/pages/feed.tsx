import React from "react";
import Post from "../components/post/Index";
import PostModel from "../models/post-model";

const postData: PostModel = {
  id: 15,
  author: "fabiotrech",
  authorAvatarUrl: "https://via.placeholder.com/32",
  creationDate: new Date(2020, 8, 30),
  imageUrl: "https://via.placeholder.com/615x400",
  likesCount: 16,
  message:
    "Magna eiusmod mollit velit consectetur Lorem quis cupidatat nostrud ex cillum sit. Ullamco laboris nisi aliqua culpa pariatur. Adipisicing veniam dolor exercitation velit aliqua commodo commodo non. Id amet laboris deserunt sunt irure velit nostrud sunt culpa cillum. Ad esse occaecat labore est ex enim ex duis nostrud quis amet mollit magna eiusmod. Do ea consequat irure et.",
  comments: [],
};

const Feed = () => {
  return <Post {...postData} />;
};

export default Feed;
