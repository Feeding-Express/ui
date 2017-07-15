import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SignUpPage } from '../signup/signup';
import { ProduceList } from '../produce-list/produce-list';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {}

  signIn() {
    this.navCtrl.push(ProduceList);
  }

  forgotPassword() {}

  signUp() {
    this.navCtrl.push(SignUpPage);
  }
}
