import { Component, OnInit } from '@angular/core';
import { Webdata } from 'src/app/modules/webdata';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tile3-child',
  templateUrl: './tile3-child.component.html',
  styleUrls: ['./tile3-child.component.css']
})
export class Tile3ChildComponent implements OnInit {
  _webdata: Webdata;
  constructor(private _DataService: DataService ) { }

  ngOnInit() {
    this._Data();
  }

  _Data() {
    this._DataService.getData('5cc082371f6e4f04592a8352')
    .subscribe(return_data => {
      this._webdata = return_data;
    });
  }
}
