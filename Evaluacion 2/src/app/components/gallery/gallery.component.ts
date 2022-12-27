import { Component, OnInit } from '@angular/core';
import { GiftService } from 'src/app/services/gift.service';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit{

  ngOnInit(): void {
  }

  error: boolean = false;

  gifts: any=[];

  doneGifts: number = 0;

  newGift = {
      url: "",
      author_id: 2006
  };

  constructor(private giftService: GiftService, private validationService: ValidationService){
    this.getGifts();
  }

  getGifts(){
    this.giftService.getGifts().subscribe( result => {
      this.gifts = result;
    })
  }

  addGift(){
    if(this.validationService.validateGift(this.newGift.url)){
      this.giftService.addGift(this.newGift).subscribe(response => {
        this.getGifts();
      })
      this.newGift.url = "";
      this.error = false; 
    }else{
      this.error = true;
    }
  }
  status: any;

  deleteGift(data:any){
    this.giftService.deleteGift(data).subscribe(() => this.status = 'Delete successful');
    
  }


}
