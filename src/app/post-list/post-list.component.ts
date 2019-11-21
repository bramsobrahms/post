import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
 
  @Input() postTitle: String;
  @Input() postContent: String;
  @Input() postLoveIts: number;
  @Input() postDateCreate: Date;

  constructor() { }

  ngOnInit() {
  }
  onLove(){
    this.postLoveIts++;
    console.log('Add a love')
  }

  onDontLove(){
    this.postLoveIts--;
    console.log('Remove a love')
    }
}
