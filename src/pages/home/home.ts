import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ENV } from '@environment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

    console.log(ENV);

    if (ENV.NAME !== 'prod') {
      let secret = 'secret_secret_secret_secret_secret_secret_secret_secret_secret_secret_secret_';
      console.log(secret);
    }
    
  }
}
