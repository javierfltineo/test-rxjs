// Type Import.
import { Post } from '../types/post';
import { USERS } from './users';

export const POSTS : Post[] = [
  {
    "id": 1,
    "author" : USERS[0],
    "text": "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was original.",
    "attachment" : "assets/rsi.png",
    "likes" : 54,
    "user_likes" : [1,2],
    "number_of_comments" : 15,
    "comments" : [
      {
        "id": 3,
        "author" : USERS[1],
        "text": "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was original.",
        "attachment" : "",
        "likes" : 24,
        "number_of_comments" : 2,
        "comments" : [
          {
            "id": 5,
            "author" : USERS[2],
            "text": "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was original.",
            "attachment" : "",
            "likes" : 2,
            "number_of_comments" : 0,
            "comments" : [],
          },
          {
            "id": 6,
            "author" : USERS[2],
            "text": "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was original.",
            "attachment" : "",
            "likes" : 1,
            "number_of_comments" : 0,
            "comments" : [],
          }
        ]
      }
    ]
  },
]
