import { Component, OnInit, ViewChild } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
@Component({
  selector: 'app-fit-choosings',
  templateUrl: './fit-choosings.component.html',
  styleUrls: ['./fit-choosings.component.css']
})
export class FitChoosingsComponent implements OnInit {
  constructor() { }

  @ViewChild('fileInput')
  fileInput:any;

  file: File | null = null;

  onClickFileInputButton(): void {
    this.fileInput.nativeElement.click();
  }

  onChangeFileInput(): void {
    const files: { [key: string]: File } = this.fileInput.nativeElement.files;
    this.file = files[0];
  }


  ngOnInit(): void {
  }

}
