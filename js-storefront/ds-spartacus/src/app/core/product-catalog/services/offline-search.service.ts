import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OfflineSearchService {
  private flag: boolean = false;
  constructor() {}
  toggleFlag(): void {
    this.flag = !this.flag;
  }
  getFlag(): boolean {
    return this.flag;
  }
}
