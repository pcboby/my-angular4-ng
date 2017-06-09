import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-silder',
  templateUrl: './silder.component.html',
  styleUrls: ['./silder.component.css']
})
export class SilderComponent implements OnInit {

  title='this is silder';
  menus = [{
    name: 'Dashboard',
    code: '10000',
    url: '/Dashboard'
  }, {
    name: 'Form',
    code: '20000',
    url: '/Form'
  }, {
    name: 'lists',
    code: '30000',
    url: '/Lists'
  }, {
    name: 'abouts',
    code: '40000',
    url: '/Abouts'
  }];

  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  constructor() { }
  ngOnInit() {
  }

}
