import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Webdata } from 'src/app/modules/webdata';

@Component({
  selector: 'app-tile4-child',
  templateUrl: './tile4-child.component.html',
  styleUrls: ['./tile4-child.component.css']
})
export class Tile4ChildComponent implements OnInit {
  _webdata: Webdata;
  constructor(private _DataService: DataService) { }

  ngOnInit() {
    this._Data();
  }

  _Data() {
    this._DataService.getData('5cc084871f6e4f04592a8e2c')
    .subscribe(return_data => {
      this._webdata = return_data;
    });
  }
}
