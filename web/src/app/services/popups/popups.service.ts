import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PopupsService {

  constructor(
    private toastController: ToastController
  ) { }
  async presentToastWithButtons(color:string, msg:string) {
    const toast = await this.toastController.create({
      animated: true,
      buttons: [
       {
          text: 'Ok',
          role: 'cancel',
          handler: () => {
          }
        }
      ],
      color: color,
      duration: 4000,
      keyboardClose: true,
      message: msg,
      position: 'bottom',
    });
    toast.present();
  }

}
