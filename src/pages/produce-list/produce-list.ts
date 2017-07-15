import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-produce-list',
  templateUrl: 'produce-list.html'
})
export class ProduceList {
  constructor(public navCtrl: NavController) {}

  addProduce() {
    this.navCtrl.push(LoginPage);
  }
}
