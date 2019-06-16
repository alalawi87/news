import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GlobalveriableProvider } from "../../providers/globalveriable/globalveriable";
/**
 * Generated class for the AddStudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import {AlertController} from 'ionic-angular';
@Component({
  selector: 'page-add-student',
  templateUrl: 'add-student.html',
})
export class AddStudentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public global: GlobalveriableProvider,private alertController: AlertController) {
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddStudentPage');
    
  }
  
  
}
