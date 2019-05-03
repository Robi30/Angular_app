import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Webdata } from 'src/app/modules/webdata';

@Component({
  selector: 'app-tile1-child',
  templateUrl: './tile1-child.component.html',
  styleUrls: ['./tile1-child.component.css']
})
export class Tile1ChildComponent implements OnInit {

  constructor(private _DataService: DataService ) { }
  _webdata: Webdata;
  ngOnInit() {
    this._Data();
  }

  _Data() {
    this._DataService.getData('5cc080c65d0e6530083a2b3a')
    .subscribe(return_data => {
      this._webdata = return_data;
    });
  }

}
