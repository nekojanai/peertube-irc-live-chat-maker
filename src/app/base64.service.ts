import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Base64Service {

  constructor() { }

  private ENC = {
    '+': '-',
    '/': '_',
    '=': '.'
  };
  private DEC = {
    '-': '+',
    _: '/',
    '.': '='
  };

  encode(url: string) {
    
    return btoa(url).replace(/[+/=]/g, (m) => {
      return this.ENC[m];
    });
  };
  
  decode(base64: string) {
    return atob(base64.replace(/[-_.]/g, (m) => {
      return this.DEC[m];
    }));
  };
}
