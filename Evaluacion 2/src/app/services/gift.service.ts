import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GiftService {

  constructor(private httpClient: HttpClient) { }


  getGifts(){
    return this.httpClient.get('https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws/?author_id=2006');
  
  }

  addGift(data: any){
    return this.httpClient.post('https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws/', data);
  }

  deleteGift(data: any){
    return this.httpClient.delete('https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws/', data);
  }

}
