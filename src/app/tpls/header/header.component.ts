import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

     browserLang:string=localStorage.getItem('lang') || 'zh-CN';

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  changeLang(lang: string) {
    this.translate.use(lang);
    localStorage.lang = lang;
  }

}
