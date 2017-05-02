import { Injectable } from '@angular/core';
import {InboxItem} from "./inbox.model";
import {BehaviorSubject, Observable} from "rxjs";
import {demoInbox} from "./inbox.demo";

@Injectable()
export class InboxService {

  private _inboxSubject: BehaviorSubject<InboxItem[]> = new BehaviorSubject<InboxItem[]>([]);
  private _inbox: any[] = [ ];
  mails$: Observable<InboxItem[]> = this._inboxSubject.asObservable();

  constructor() {
    this._inbox = demoInbox;

    this._inboxSubject.next(this._inbox);
  }


}
