import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
 
  @Input() postTitle: String;
  @Input() postContent: String;
  @Input() postLoveIts: Number;
  @Input() postDateCreate: Date;

  constructor() { }

  ngOnInit() {
  }
  onLove(){
    console.log('Add a love')
  }

  onDontLove(){
    console.log('Remove a love')
    }
}
