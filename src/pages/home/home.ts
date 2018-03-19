import { Component, ViewChild } from '@angular/core';
import { NavController, Content } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //相似的結果 shrinking header
  //https://github.com/ionic-team/ionic/issues/1381
  //http://codepen.io/kaililleby/pen/HALnJ


  //測試實作
  //https://www.joshmorony.com/creating-a-shrinking-header-for-segments-in-ionic/

  @ViewChild(Content) content: Content;
  somethings: any = new Array(20);

  constructor(public navCtrl: NavController) {

  }

}
