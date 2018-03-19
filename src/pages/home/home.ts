import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  text = '';
  otherText = '';
  constructor(public navCtrl: NavController) {

    let text = '';
    for (let index = 0; index < 20; index++) {
      text += 'Scrolling text...';
      text += index;
    }
    this.text = text;
  }
}
