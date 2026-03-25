import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LanguageDirection, LanguageService } from './shared/services/language.service';

@Component({
  selector: 'ng-shop-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ng-shop';

  direction$: Observable<LanguageDirection>;

  constructor(private languageService: LanguageService) {
    this.languageService.init();
    this.direction$ = this.languageService.direction$;
  }
}
