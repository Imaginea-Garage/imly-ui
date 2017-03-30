import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import * as Clipboard from 'clipboard/dist/clipboard.min.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('copyButton') copyButton: ElementRef;

  qrCodeApiLink = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=http%3A%2F%2Fpraveenpuglia.com"

  ngOnInit(){
    new Clipboard(this.copyButton.nativeElement);
  }
}
