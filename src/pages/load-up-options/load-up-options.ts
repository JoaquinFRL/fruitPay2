import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoadUpOptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-load-up-options',
  templateUrl: 'load-up-options.html',
})
export class LoadUpOptionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cards =[
      {
        title:"7 Eleven",
        color:"linear-gradient(200deg,#FFE899, #FFC369)"
      },
      {
        title:"Banco de Oro",
        color:"linear-gradient(200deg,#FFE899, #FFC369)"
      },
      {
        title:"EC-PAY",
        color:"linear-gradient(200deg,#FFE899, #FFC369)"
      }
    ]
  }
  cards;

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoadUpOptionsPage');
  }

  
}
