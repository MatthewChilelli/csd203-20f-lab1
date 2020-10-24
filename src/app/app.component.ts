import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      var firebaseConfig = {
        apiKey: "AIzaSyB-BrUuq3JXj6ZftPB_U270RmLc2RK8h0Q",
        authDomain: "csd203-mc.firebaseapp.com",
        databaseURL: "https://csd203-mc.firebaseio.com",
        projectId: "csd203-mc",
        storageBucket: "csd203-mc.appspot.com",
        messagingSenderId: "471417990453"
        }
        firebase.initializeApp(firebaseConfig);

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
