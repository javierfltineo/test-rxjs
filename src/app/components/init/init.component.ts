// Core Imports.
import { Component, OnInit } from '@angular/core';

// Router Imports.
import { ActivatedRoute } from '@angular/router';

import { Post } from '../../base/types/post';
import { POSTS } from '../../base/moks/posts';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss']
})
export class InitComponent implements OnInit {

  posts: Post[];

  constructor(public activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.posts = POSTS;
    console.log("ngOnInit " + this.posts);
  }
}
