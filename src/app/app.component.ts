import { Component } from '@angular/core';
import { resolve } from 'url';
import { reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   
  posts = [
    {
      title: "Mon premier post",
      content: " coucou c'est le premier post d'angular et je suis content",
      loveIts: 0,
      created_at: Date()
    },
    {
      title: "Mon deuxième post",
      content: " coucou c'est le deuxième post d'angular et je suis fier",
      loveIts: 0,
      created_at:  Date()
    },
    {
      title: "Mon troisième post",
      content: " coucou c'est le troisième post d'angular et je métrise",
      loveIts: 1,
      created_at:  Date()
    },
  ];


}
