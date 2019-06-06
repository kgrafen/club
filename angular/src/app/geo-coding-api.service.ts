import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class GeoCodingApiService {

  uri = 'https://dawa.aws.dk/postnumre/';

  constructor(private http: Http) { }
 
  getZipFromCity(zip: string){
    return this.http.get(this.uri + zip)
  }
}
