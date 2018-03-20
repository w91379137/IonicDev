import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare const Release;
window['Release'] = false;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

    if (Release) {
      let secret = 'Release_Release_Release_Release_Release_Release_Release_Release_Release_Release_';
      console.log(secret);
    }
    else {
      let secret = 'secret_secret_secret_secret_secret_secret_secret_secret_secret_secret_secret_';
      console.log(secret);
    }
  }

}
