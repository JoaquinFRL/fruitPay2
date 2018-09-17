import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Service } from '../../admin.service';
import {SignInPage} from '../sign-in/sign-in';
import {DashboardPage} from '../dashboard/dashboard';
import { LandingPage } from '../landing/landing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public admin:Service) {
  }

  navigate(){
    this.navCtrl.setRoot(LandingPage);
  }
}
