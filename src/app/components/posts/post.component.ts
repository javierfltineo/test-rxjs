// Core Imports.
import { Component, OnInit, Input } from '@angular/core';

// Router Imports.
import { ActivatedRoute } from '@angular/router';

import { Post } from '../../base/types/post';

@Component({
  selector: 'etoro-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;

  constructor(public activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log("ngOnInit");

    console.warn(this.post);
  }

  userLikesPost(id: number): boolean {
    return this.post.user_likes.indexOf(id) !== -1;
  }
}
