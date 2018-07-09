import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import DisplayArr from '../../app/array';
import { HomePage } from '../home/home';
/**
 * Generated class for the ScoreBoardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-score-board',
  templateUrl: 'score-board.html',
})
export class ScoreBoardPage {

 disArr= DisplayArr;
 home=0;
 away=0;
 score=0;
 team;





  constructor(public navCtrl: NavController, public navParams: NavParams, public navAlert: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScoreBoardPage');
  }


  check(score){
    this.team=score;
  }
 

  checks(score){
    this.team=score;
  }
 

  alert(){
    const prompt = this.navAlert.create({
      title:'game over!',
      

      buttons:[{
        text:'Ok',
        handler: data=>{
          console.log("the match is over!")
        }
       }

      
       
      ]
       
    
    });
    prompt.present();
  }


  try(){
  if(this.team =='A'){
     this.home = this.home +5;
   }
   else{
    this.away = this.away +5;
   }
 }

 penalty(){
  if(this.team =='A'){
    this.home = this.home +3;
  }
  else{
   this.away = this.away +3;
  }
}

conversion(){
  if(this.team =='A'){
    this.home = this.home +2;
  }
  else{
   this.away = this.away +2;
  }
}

try1(){
  if(this.team =='A'){
    this.home = this.home -5;
    if(this.home <0)
    {
      this.home=0;
    }

  }
  else{
   this.away = this.away -5;

   if(this.away <0)
    {
      this.away=0;
    }

  }


}

penalty1(){
  if(this.team =='A'){
    this.home = this.home -3;
   
    if(this.home <0)
    {
      this.home=0;
    }
    
  }
  else{
   this.away = this.away -3;

   if(this.away <0)
   {
     this.away=0;
   }

  }
}

conversion1(){
  if(this.team =='A'){
    this.home = this.home -2;

    if(this.home <0)
    {
      this.home=0;
    }
  }
  else{
   this.away = this.away -2;

   if(this.away <0)
   {
     this.away=0;
   }
  }
}

reset(){
 this.home=0;
 this.away=0;

DisplayArr[this.home,this.away]=0;
this.navCtrl.push(HomePage);
this.alert();
}
}
