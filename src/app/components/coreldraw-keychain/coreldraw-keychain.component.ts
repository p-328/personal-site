import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coreldraw-keychain',
  templateUrl: './coreldraw-keychain.component.html',
  styleUrls: ['./coreldraw-keychain.component.scss']
})
export class CoreldrawKeychainComponent implements OnInit {
  rules = [
    "In order to make a cut, you must select the outline of the line you want to cut to be red. \nAnything else will just be engraved.",
    "You can upload DXF/DWG files in your drawing, but any text you put in must be put on the area of the DXF/DWG file.",
    "You can set a ratio in the height and width of a shape by selecting the lock icons on Width and Height."
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
