import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { FeedingExpress } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/sample-list/list';
import { LoginPage } from '../pages/login/login';
import { SignUpPage } from '../pages/signup/signup';
import { ProduceList } from '../pages/produce-list/produce-list';
import { AddProducePage } from '../pages/add-produce/add-produce';
import { ReceivedOrders } from '../pages/received-orders/received-orders';
import { AddressBook } from '../pages/address-book/address-book';
import { AddSendNotification } from '../pages/new-message/new-message';
import { SuccessPage } from '../pages/message-success/message-success';
import { ProduceAvailableList} from '../pages/produce-available-list/produce-available-list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    FeedingExpress,
    HomePage,
    ListPage,
    LoginPage,
    SignUpPage,
    ProduceList,
    AddProducePage,
    ReceivedOrders,
    AddSendNotification,
    SuccessPage,
    ProduceAvailableList,
    AddressBook
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(FeedingExpress),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    FeedingExpress,
    HomePage,
    ListPage,
    LoginPage,
    SignUpPage,
    ProduceList,
    AddProducePage,
    ReceivedOrders,
    AddSendNotification,
    ProduceAvailableList,
    SuccessPage,
    AddressBook
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
