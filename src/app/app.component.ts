import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'vom-frontend';
  language: any;

  constructor(private translator: TranslateService) {

  }
  ngOnInit(): void {
    this.initTranslateService();
  }

  private initTranslateService(): void {
    this.translator.setDefaultLang('en');
    this.language = localStorage.getItem('language') || 'en';

    this.translator.use(this.language);
  }

  /**
   * changeLanguage
   */
  public changeLanguage(element: any): void {
    this.language = element.value;
    localStorage.setItem('language', this.language);
    this.translator.use(this.language);
    console.log(`language set to ${this.language}`);

    // window.location.reload();

  }
}
