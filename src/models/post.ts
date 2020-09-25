import Comment from "./comment";

export default interface Post {
  id: number;
  creationDate: Date;
  likesCount: number;
  imageUrl: string;
  author: string;
  authorAvatarUrl: string;
  message: string;
  comments: Comment[];
}
