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

  //event emmitter which needs to recieved by the parent component
  @Output()
  addImage: EventEmitter<IOpenClipArt> = new EventEmitter<IOpenClipArt>();

  clipArtData: IOpenClipArt;

  constructor(private _clipArtService: ClipArtApiService) {}

  ngOnInit() {
    //making call to api service for clip art images
    this._clipArtService.getImages(this.imageStr).subscribe(data => {
      console.log(this.imageStr)
      this.clipArtData = data;
    });
  }

  //emitting img url to parent component
  selectImage(imageStr): void {
    console.log("image selected and emitted from clip art component", imageStr);
    this.addImage.emit(imageStr);
  }
}
