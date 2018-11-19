import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnChanges {
  
  // ouput event when a star rating is clicked
  @Output() notify: EventEmitter<string> = new EventEmitter<string>(); 
  
  
  @Input() rating: number;
  starWidth: number;

  constructor() { }

  public ngOnChanges() : void {
    this.starWidth = this.rating * 90 / 5
  }

  //emmitting event to be recieved in parent component ( product list )
  onClick() {
    this.notify.emit('clicked')
  }
}
