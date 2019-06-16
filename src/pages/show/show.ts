import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GlobalveriableProvider } from "../../providers/globalveriable/globalveriable";
import { ShowResultPage} from '../show-result/show-result';
import { PageNewsPage} from '../page-news/page-news';
/**
 * Generated class for the ShowStudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-show-student',
  templateUrl: 'show.html',
})
export class ShowPage {

studentArray:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public global: GlobalveriableProvider) {
    this.studentArray=  global.studentArray;
   //this.studentArray=  global.json;
    //console.log(global.json[0].course);
    console.log( global.json.articles[0].author);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowStudentPage');
  }
  deletestudent(i){
    this.global.studentArray.splice(i,1);
      }
      detailstudent(item,i){
        this.navCtrl.push(ShowResultPage,{cte:item})
        }
        pagenews(item,i){
          this.navCtrl.push(PageNewsPage,{cte:item})
          }
        
    
}
