import { Component, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { LanguageCode, LanguageService } from '../services/language.service';

@Component({
  selector: 'ng-shop-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isNavOpen = false;
  currentLanguage$: Observable<LanguageCode>;

  constructor(private languageService: LanguageService) {
    this.currentLanguage$ = this.languageService.currentLanguage$;
  }

  toggleNav(): void {
    this.isNavOpen = !this.isNavOpen;
  }

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }

  closeNav(): void {
    this.isNavOpen = false;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(): void {
    if (window.innerWidth >= 992) {
      this.closeNav();
    }
  }
}
