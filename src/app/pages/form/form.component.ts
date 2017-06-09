import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

comIdList:any = [
        {id: 1, name: '中国公司'},
        {id: 2, name: '美国公司'},
        {id: 3, name: '德国公司'}
    ];

    typeList:any = [
        {id: 1, name: '类型A'},
        {id: 2, name: '类型B'}
    ];

    comId:number=2;
    type:number=2;

  constructor() { }

  ngOnInit() {
  }

}
