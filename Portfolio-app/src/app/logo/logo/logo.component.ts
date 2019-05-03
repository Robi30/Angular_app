import { Component, OnInit, Input } from '@angular/core';
import { Clock } from './clock/clock';
import { DataService } from 'src/app/services/data.service';
import { Webdata } from 'src/app/modules/webdata';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],

})
export class LogoComponent implements OnInit {
  readonly id_0 = '5cb8c290e7179a264cf2b966';
  _webdata: Webdata;
  constructor(private _dataService: DataService) {
  }
  ngOnInit() {
    // Wywołyje clock() co 1 sek.
    setInterval(() => this.clock(), 0, 1000);
    this.get_data();
  }

  clock() {
    const objClock = new Clock;
    objClock.time();
  }

  get_data() {
    this._dataService.getData(this.id_0).subscribe(return_data => {
      this._webdata = return_data;
      console.log(this._webdata.title);
    });
  }
}
