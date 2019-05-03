import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Tile1Component } from './nav-tiles/tile1/tile1.component';
import { Tile2Component } from './nav-tiles/tile2/tile2.component';
import { Tile3Component } from './nav-tiles/tile3/tile3.component';
import { Tile4Component } from './nav-tiles/tile4/tile4.component';
import { Tile5Component } from './content-tiles/tile5/tile5.component';
import { Tile6Component } from './content-tiles/tile6/tile6.component';
import { YtComponent } from './social-media/yt/yt.component';
import { FbComponent } from './social-media/fb/fb.component';
import { LogoComponent } from './logo/logo/logo.component';
import { GhComponent } from './social-media/gh/gh.component';
import { AppRoutingModule } from './app.routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LogoChildComponent } from './logo/logo/logo-child/logo-child.component';
import { Tile1ChildComponent } from './nav-tiles/tile1/tile1-child/tile1-child.component';
import { Tile2ChildComponent } from './nav-tiles/tile2/tile2-child/tile2-child.component';
import { Tile3ChildComponent } from './nav-tiles/tile3/tile3-child/tile3-child.component';
import { Tile4ChildComponent } from './nav-tiles/tile4/tile4-child/tile4-child.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    LogoChildComponent,
    Tile1Component,
    Tile1ChildComponent,
    Tile2Component,
    Tile2ChildComponent,
    Tile3Component,
    Tile3ChildComponent,
    Tile4Component,
    Tile4ChildComponent,
    Tile5Component,
    Tile6Component,
    YtComponent,
    FbComponent,
    GhComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
