import { Component, OnInit } from '@angular/core';
import { LogoComponent } from '../logo.component';
import { Webdata } from 'src/app/modules/webdata';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-logo-child',
  templateUrl: './logo-child.component.html',
  styleUrls: ['./logo-child.component.css']
})
export class LogoChildComponent implements OnInit {
  constructor(private _DataService: DataService) {}
  _webdata: Webdata;

  ngOnInit() {
    this._DataService.getData('5cb8c290e7179a264cf2b966')
    .subscribe(return_data => {
      this._webdata = return_data;
    });
  }

}
