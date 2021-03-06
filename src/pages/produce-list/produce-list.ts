import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AddProducePage } from '../add-produce/add-produce';
import { AddSendNotification } from '../new-message/new-message';

@Component({
  selector: 'page-produce-list',
  templateUrl: 'produce-list.html'
})
export class ProduceList {
  constructor(public navCtrl: NavController) {}

  addProduce() {
    this.navCtrl.push(AddProducePage);
  }

  sendNotification() {
    this.navCtrl.push(AddSendNotification);
  }

}
