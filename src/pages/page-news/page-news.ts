import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PageNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-page-news',
  templateUrl: 'page-news.html',
})
export class PageNewsPage {
news:any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.news=this.navParams.data.cte;
    //console.log(this.navParams.data.cte);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageNewsPage');
  }

}
