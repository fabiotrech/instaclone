import CommentModel from "./comment-model";

export default interface PostModel {
  id: number;
  creationDate: Date;
  likesCount: number;
  imageUrl: string;
  author: string;
  authorAvatarUrl: string;
  message: string;
  comments: CommentModel[];
}
