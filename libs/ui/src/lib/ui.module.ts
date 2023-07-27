import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './component/banner/banner.component';
import { ButtonModule } from 'primeng/button';
import { GalleryComponent } from './component/gallery/gallery.component';
import { GalleriaModule } from 'primeng/galleria';

@NgModule({
  imports: [CommonModule, ButtonModule,GalleriaModule],
  declarations: [BannerComponent, GalleryComponent],
  exports: [BannerComponent, GalleryComponent],
})
export class UiModule {}
