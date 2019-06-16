import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

/*
  Generated class for the GlobalveriableProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalveriableProvider {
  ApiUrl="assets/student.json";
  

    public score:any;
      public studentArray:any;
      public json:any;
     public countrycode=[
       {"country":"مصر", "id":"country=eg"},
       {"country":"الامارات", "id":"country=ae"},
     ]
  constructor(public http: HttpClient) {
    

 //this.http.get("assets/score.json").map(res => res).subscribe(data=>{this.json=data;  })

    
 this.http.get('assets/student.json').subscribe(response => this.studentArray=response);
 this.http.get('assets/score.json').subscribe(response => this.score=response);
 this.http.get('https://newsapi.org/v2/top-headlines?country='+this.countrycode[0].id+'&apiKey=94f1a869f22a449bb230aaea35621df9').subscribe(response => this.json=response);

 console.log(this.json)
  }
  getjsonfile(id:string){
    this.http.get('https://newsapi.org/v2/top-headlines?'+id+'&apiKey=94f1a869f22a449bb230aaea35621df9').subscribe(response => this.json=response);


  }
  getalljsonfile(id2:string){
   // console.log(id2)
    //var id2='احمد';
    this.http.get('https://newsapi.org/v2/everything?q='+id2+'&language=ar&apiKey=94f1a869f22a449bb230aaea35621df9').map(response => this.json=response);


  }
  
 

}

