import { Injectable } from '@angular/core';
import { HeaderData } from '../model/header-data';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerData = new BehaviorSubject<HeaderData>({
    title: 'Início',
    icon: 'home'
  })

  constructor() { }

  get headerData(): HeaderData {
    return this._headerData.value;
  }

  set headerData(headerData: HeaderData) {
    this._headerData.next(headerData);
  }

  decideIconAndTitleByURL(url: string): void {
    if (url.includes('requisicao')) {
      this.headerData = {
        title: 'Requisição',
        icon: 'assignment'
      }
    }
    else if (url.includes('fornecedor')) {
      this.headerData = {
        title: 'Fornecedor',
        icon: 'work'
      }
    }
    else if (url.includes('cotacao')) {
      this.headerData = {
        title: 'Cotação',
        icon: 'monetization_on'
      }
    }
    else if (url.includes('usuario')) {
      this.headerData = {
        title: 'Usuário',
        icon: 'account_circle'
      }
    } else {
      this.headerData = {
        title: 'Início',
        icon: 'home'
      }
    }
  }

}
