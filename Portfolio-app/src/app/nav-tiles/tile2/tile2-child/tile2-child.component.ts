import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Webdata } from 'src/app/modules/webdata';

@Component({
  selector: 'app-tile2-child',
  templateUrl: './tile2-child.component.html',
  styleUrls: ['./tile2-child.component.css']
})
export class Tile2ChildComponent implements OnInit {
  _webdata: Webdata;
  constructor(private _DataService: DataService ) { }

  ngOnInit() {
  this._Data();
  }

  _Data() {
    this._DataService.getData('5cc0814b1f6e4f04592a7f9e')
    .subscribe(return_data => {
      this._webdata = return_data;
    });
  }

}
