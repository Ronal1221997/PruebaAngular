import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  validateGift(description: string): boolean{
    if(description.trim() == ""){
      return false;
    }
    return true;
  }
}
