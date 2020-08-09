import {Component, OnInit, Inject, ViewChild, ElementRef} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-playlist-create',
  templateUrl: './playlist-create.component.html',
  styleUrls: ['./playlist-create.component.scss']
})
export class PlaylistCreateComponent implements OnInit {
  Uploadfiles: FileList;
  @ViewChild('file') fileinput:ElementRef;

  constructor(
    private dialogRef: MatDialogRef<PlaylistCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submitDialog() {
    this.uploadImage();
    this.dialogRef.close(this.data);
  }

  uploadImage() {
    // Move to side effects
    Object.assign(this.data, { file: this.Uploadfiles[0] });
    console.log(this.data)
  }
  onClickButton(){
    this.fileinput.nativeElement.click();
  }

  onFileChange(ev) {
    console.log(this.fileinput)
    this.Uploadfiles = ev.target.files;
  }

  ngOnInit() {
  }
}
