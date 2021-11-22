import { User } from "./user";

// Hero Interface
export interface PostInterface {
    id: number;
    author: User;
    text: string;
    attachment: string;
    likes: number;
    user_likes?: number[];
    number_of_comments: number;
    comments: PostInterface[];
}

// Hero Class
export class Post implements PostInterface {
    id: number;
    author: User;
    text: string;
    attachment: string = "";
    likes: number = 0;
    user_likes?: number[];
    number_of_comments: number = 0;
    comments: Post[];
}



