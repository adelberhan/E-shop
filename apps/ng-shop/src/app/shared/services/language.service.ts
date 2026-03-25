import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, map } from 'rxjs';

export type LanguageCode = 'en' | 'ar';
export type LanguageDirection = 'ltr' | 'rtl';

const DEFAULT_LANGUAGE: LanguageCode = 'en';
const STORAGE_KEY = 'ngshop_language';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly supportedLanguages: LanguageCode[] = ['en', 'ar'];
  private readonly currentLanguageSubject =
    new BehaviorSubject<LanguageCode>(DEFAULT_LANGUAGE);

  currentLanguage$ = this.currentLanguageSubject.asObservable();
  direction$ = this.currentLanguage$.pipe(
    map((language) => this.getDirection(language))
  );

  constructor(
    private translateService: TranslateService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  init() {
    this.translateService.addLangs(this.supportedLanguages);
    this.translateService.setDefaultLang(DEFAULT_LANGUAGE);

    const storedLanguage = this.getStoredLanguage();
    this.useLanguage(storedLanguage || DEFAULT_LANGUAGE);
  }

  toggleLanguage() {
    const nextLanguage =
      this.currentLanguageSubject.value === 'en' ? 'ar' : 'en';

    this.useLanguage(nextLanguage);
  }

  useLanguage(language: LanguageCode) {
    const normalizedLanguage = this.supportedLanguages.includes(language)
      ? language
      : DEFAULT_LANGUAGE;
    const direction = this.getDirection(normalizedLanguage);

    this.translateService.use(normalizedLanguage);
    this.currentLanguageSubject.next(normalizedLanguage);
    localStorage.setItem(STORAGE_KEY, normalizedLanguage);

    this.document.documentElement.lang = normalizedLanguage;
    this.document.documentElement.dir = direction;
    this.document.body.dir = direction;
  }

  private getDirection(language: LanguageCode): LanguageDirection {
    return language === 'ar' ? 'rtl' : 'ltr';
  }

  private getStoredLanguage(): LanguageCode | null {
    const savedLanguage = localStorage.getItem(STORAGE_KEY);

    if (
      savedLanguage === 'en' ||
      savedLanguage === 'ar'
    ) {
      return savedLanguage;
    }

    return null;
  }
}
