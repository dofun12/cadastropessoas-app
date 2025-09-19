import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor() { }


  getListWines():Promise<any> {
    return fetch("https://api.sampleapis.com/wines/reds").then(response=> {
      return response.json();
    }).catch(err=>{});
  }
}
