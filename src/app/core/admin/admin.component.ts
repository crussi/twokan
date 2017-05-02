import {Component, OnInit, Inject, ViewChild, ViewEncapsulation} from '@angular/core';
import {Subscription} from "rxjs";
import {MediaChange, ObservableMedia} from "@angular/flex-layout";
import {Router, NavigationEnd} from "@angular/router";
import * as screenfull from 'screenfull';

@Component({
  selector: 'ms-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminComponent implements OnInit {

  @ViewChild('sidenav')
  sidenav;

  private _mediaSubscription: Subscription;
  sidenavOpen: boolean = false;
  sidenavMode: string = 'side';
  isMobile: boolean = false;

  private _routerEventsSubscription: Subscription;

  quickpanelOpen: boolean = false;

  isFullscreen: boolean = false;

  constructor(
    private media: ObservableMedia,
    private router: Router) { 
      this.setupIsMobile(this.media.isActive('xs') || this.media.isActive('sm'));
  }

  ngOnInit() {
    console.log(this.media.isActive('xs'));
    console.log(this.media.isActive('sm'));
    console.log(this.media.isActive('md'));
    console.log(this.media.isActive('lg'));
    this._mediaSubscription = this.media.asObservable().subscribe((change: MediaChange) => {
      this.setupIsMobile((change.mqAlias == 'xs') || (change.mqAlias == 'sm'));
      // let isMobile = (change.mqAlias == 'xs') || (change.mqAlias == 'sm');

      // this.isMobile = isMobile;
      // this.sidenavMode = (isMobile) ? 'over' : 'side';
      // this.sidenavOpen = !isMobile;
    });

    this._routerEventsSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && this.isMobile) {
        this.sidenav.close();
      }
    });
  }

  private setupIsMobile(smallSize:boolean){
      let isMobile = smallSize;
      this.isMobile = isMobile;
      this.sidenavMode = (isMobile) ? 'over' : 'side';
      this.sidenavOpen = !isMobile;

  }

  toggleFullscreen() {
    if (screenfull.enabled) {
      screenfull.toggle();
      this.isFullscreen = !this.isFullscreen;
    }
  }

  ngOnDestroy() {
    this._mediaSubscription.unsubscribe();
  }

  onActivate(e, scrollContainer) {
    scrollContainer.scrollTop = 0;
  }
}
