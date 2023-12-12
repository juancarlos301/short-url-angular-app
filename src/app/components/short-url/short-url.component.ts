import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShortUrlService } from '../../services/short-url.service';

import { SpinnerComponent } from '../spinner';
@Component({
  selector: 'app-short-url',
  standalone: true,
  imports: [CommonModule, FormsModule, SpinnerComponent],
  templateUrl: './short-url.component.html',
  styleUrl: './short-url.component.css',
})
export class ShortUrlComponent {
  nameUrl: string;
  urlShort: string;
  urlProccessed: boolean;
  loading: boolean;
  showError: boolean;
  textError: string;

  constructor(private _shortUrlService: ShortUrlService) {
    this.nameUrl = '';
    this.urlShort = '';
    this.urlProccessed = false;
    this.loading = false;
    this.showError = false;
    this.textError = '';
  }

  sendUrl() {
    this.urlProccessed = false;
    this.loading = true;
    if (this.nameUrl === '') {
      this.onError('insert a valid URL');
      return;
    }
    this._shortUrlService.getUrlShort(this.nameUrl).subscribe(
      (data) => {
        this.urlShort = data.link;
        this.urlProccessed = true;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        this.onError(error?.error?.description || 'Invalid Url');
      }
    );
  }

  onError(value: string) {
    this.showError = true;
    this.textError = value;

    setTimeout(() => {
      this.showError = false;
      this.textError = '';
    }, 2000);
  }
}
