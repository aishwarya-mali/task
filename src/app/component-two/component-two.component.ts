import { DataService } from './../data.service';

import { Component, OnInit } from '@angular/core';

declare const clearText:any;

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css']
})
export class ComponentTwoComponent implements OnInit {
  text="";
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.share.subscribe(x => this.text=x);
  }

  clear(){
    clearText();
  }
}
