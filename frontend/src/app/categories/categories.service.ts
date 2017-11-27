import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()


export class ArticlesListService {
  constructor (private http: HttpClient) {}

  fetchArtlclesList (param, category):Promise <any> {
    return new Promise((resolve, reject) => {
      this.http.get(`//localhost:3000/api/sort/${category}`, {observe: 'response', params: param})
        .subscribe(data => {
          resolve(data)
        }, error => {
          reject(error)
        })
    })
  }
}