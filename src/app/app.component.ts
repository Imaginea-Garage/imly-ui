import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  qrCodeApiLink = "https://api.qrserver.com/v1/create-qr-code/?size=185x185&data=http%3A%2F%2Fpraveenpuglia.com"
}
