import { Component } from '@angular/core';
import { NavController, Alert } from 'ionic-angular';
import { ScoreBoardPage } from '../score-board/score-board';
import DisplayArr, { display } from '../../app/array';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  teams;
  DisplayArr = 0;

  constructor(public navCtrl: NavController, public navAlert: AlertController) {

  }
  
  add(home, away) {

    if(home != away ||  away  != home ){ 
      let object = new display(home, away);
      DisplayArr.push(object);
      this.alert();
      console.log(DisplayArr);
    
      this.navCtrl.push(ScoreBoardPage);  
    }

    else {
      this.alert1();
    }



     
    
  }

  alert() {
    const prompt = this.navAlert.create({
      title: 'The New Match Is Beginning!',

      buttons: [
        {
          text: 'Ok',
          handler: data => {
            console.log('the new match is beginning');
          }

        }
      ]

    });
    prompt.present();
  }

  alert1(){
    const prompt = this.navAlert.create({
      title: 'cannot be the same team playing against each other!',

      buttons: [
        {
          text: 'Ok',
          handler: data => {
            console.log('the new match is beginning');
          }

        }
      ]

    });
    prompt.present();
  }
}
