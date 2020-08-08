import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-playlist-create',
  templateUrl: './playlist-create.component.html',
  styleUrls: ['./playlist-create.component.scss']
})
export class PlaylistCreateComponent implements OnInit {
  Uploadfiles: FileList;

  constructor(
    private dialogRef: MatDialogRef<PlaylistCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  /**
   * Programatically submit and close the dialog.
   */
  submitDialog() {
    this.uploadImage();
    this.dialogRef.close(this.data);
  }

  uploadImage() {
    // Move to side effects
    Object.assign(this.data, { file: this.Uploadfiles[0] });
  }

  /**
   * Save the files uploaded to the upload widget.
   */
  onFileChange(ev) {
    this.Uploadfiles = ev.target.files;
  }

  ngOnInit() {
  }
}
