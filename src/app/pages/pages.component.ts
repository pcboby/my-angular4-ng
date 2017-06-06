import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    if( this.router.url === '/') {
      this.router.navigate(['/Dashboard'])
    }
  }

}
