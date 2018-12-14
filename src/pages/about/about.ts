import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  personName: string;
  constructor(public ToastCtrl: ToastController) {

  }
showGreeting(name:string){
  console.log(name);
  this.ToastCtrl.create({
    message: "Hello " + name,
    duration: 3000
  }).present();
}


}
