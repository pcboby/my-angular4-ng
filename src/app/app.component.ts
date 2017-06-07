import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
        translate.addLangs(['zh-CN', 'en']);
        translate.setDefaultLang('zh-CN');

        const browserLang = translate.getBrowserLang();
        console.log(browserLang);
        translate.use(browserLang.match(/en|zh-CN/) ? browserLang : 'zh-CN');
    }

    changeLang(lang) {
      console.log(lang);
      this.translate.use(lang);
    }
    toggleLang() {
      console.log(this.translate.getBrowserLang());
      //获取语言风格，相当于更详细的语言类型，比如zh-CN、zh-TW、en-US
      console.log(this.translate.getBrowserCultureLang());
    }
}
