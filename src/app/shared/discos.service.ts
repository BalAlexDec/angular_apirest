import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Discos } from '../models/discos';

@Injectable({
  providedIn: 'root'
})
export class DiscosService {
  private  url = 'http://localhost:4000/discos';
  constructor(private http:HttpClient) {}

  getDiscos(id:number){
    return this.http.get(this.url+"/?id="+id);
  }
  getallDiscos(){
    return this.http.get(this.url);
  }
  modificarDiscos(modf:Discos){
    return this.http.put(this.url,modf);
  }

  DelDiscos(id:any){
      console.log(id);
      const httpOptions = {headers: {contentType: 'application/json'}, body: id}
      return this.http.delete(this.url, httpOptions)
    }

  postDiscos(newDisco:Discos){
    return this.http.post(this.url, newDisco);
  }
}
