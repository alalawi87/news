import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ShowPage} from '../show/show';

import { AddStudentPage} from '../add-student/add-student';
import { AddGradePage} from  '../add-grade/add-grade';
import { GlobalveriableProvider } from "../../providers/globalveriable/globalveriable";
import { AlertController, reorderArray } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public reorderT=true;
  public custom:string;
  private names: Array<string>;
  private code: any;
  constructor(public navCtrl: NavController,public global: GlobalveriableProvider,private AlertCtrl:AlertController,public http: HttpClient) {
    this.names = [ 'Egypt', 'Morocco', 'tom', 'jared']; 
    this.code = { "United_States":"country=us","United_Kingdom":"country=gb",
    "مصر": "country=eg",  "الامارات": "country=ae",
    "اخبار السعودية":"sources=google-news-sa",
    "صحيفة سبق":"sources=sabq","ارقام":"sources=argaam" }; 
  }
 
  about() {
    this.navCtrl.push(AddStudentPage);
  }
 
 
  details(item){

    //this.global.getjsonfile(item.id);

   
    this.http.get('https://newsapi.org/v2/top-headlines?'+item.id+'&apiKey=94f1a869f22a449bb230aaea35621df9').subscribe(response => {this.global.json=response;this.navCtrl.push(ShowPage);});
    
  }

  alldetails(){

   // var test=this.global.getalljsonfile(this.custom);
    this.http.get('https://newsapi.org/v2/everything?q='+this.custom+'&language=ar&apiKey=94f1a869f22a449bb230aaea35621df9').subscribe(response => {this.global.json=response;this.navCtrl.push(ShowPage);});

    
  }
  
  deletelocation(i){
    this.global.countrycode.splice(i,1);
    
      }
  toggle()
      {
        this.reorderT=!this.reorderT;
    
      }
      
  Reorder($event)
  {
    reorderArray(this.global.countrycode,$event);
  }


  
  addcontant2()
  {
    let adCte=this.AlertCtrl.create(
      {
        title:"addcontact",
        message:"enter code",
        inputs: [
          {
            type: "text",
            name: "Country",
            placeholder: "Country"
          },
          {
            type: "text",
            name: "id",
            placeholder:"id"
          }],
        buttons:[
          {text:"cencel"},
          {text:"add ",handler:(newContact)=>{
            this.global.countrycode.push(

              {
                "country": newContact.Country,
                "id": newContact.id
              }
            ); }
          
        
        }
        ]

      });

      adCte.present();
  }

  addcontant() {

    // Object with options used to create the alert
    var options = {
      title: 'Choose the name',
      message: 'Which name do you like?',
      buttons:[
        {text:"cencel"},
        
        {text:"add ",handler:data=>{
          this.global.countrycode.push(

            {
              "country": data,
              
              "id":this.code[data]
            }
          ); }
      }
      ],
      inputs: []
    };

    options.inputs =[];

    // Now we add the radio buttons
    for(var key in this.code)
{
 // var value = arr[key];
  //document.write(key + " = " + value + '<br>');
  options.inputs.push({ name : 'options', value: key, label: key, type: 'radio' });

}
   // for(let i=0; i< this.names.length; i++) {
  //    options.inputs.push({ name : 'options', value: this.names[i], label: this.names[i], type: 'radio' });  }
    // Create the alert with the options
    let alert = this.AlertCtrl.create(options);
    alert.present();
  }

}
