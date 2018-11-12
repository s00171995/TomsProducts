import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ClipArtApiService } from "../shared/clip-art-api/clip-art-api.service";

@Component({
  selector: "app-display-clipart",
  templateUrl: "./display-clipart.component.html",
  styleUrls: ["./display-clipart.component.css"]
})
export class DisplayClipartComponent implements OnInit {
  @Input()
  imageStr: string;
  @Output()
  addImage: EventEmitter<any> = new EventEmitter();
  clipArtData: IOpenClipArt;
  constructor(private _clipArtService: ClipArtApiService) {}

  ngOnInit() {
    this._clipArtService.getImages(this.imageStr).subscribe(data => {
      this.clipArtData = data;
    });
  }
  selectImage(imageStr) : boolean {
    console.log('image selected and emitted from clip art component', imageStr)
    this.addImage.emit(imageStr);
    return false;
  }
}
