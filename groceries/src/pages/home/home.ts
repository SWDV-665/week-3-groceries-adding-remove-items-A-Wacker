import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Grocery";
  
  items = [
    {
      name: "Milk",
      quantity: "1"
    },
    {
      name: "Bread",
      quantity: "2"
    },
    {
      name: "Eggs",
      quantity: "12"
    }
  ];
  
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }

addItem() {
  let alert = this.alertCtrl.create({
    title: 'Add Item',
    message: 'Please enter an item.',
    inputs: [
      {
        name: 'name',
        placeholder: 'Item'
      },
      {
        name: 'quantity',
        placeholder: 'Quantity',
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Add',
        handler: item => {
          this.items.push(item);
        }
      }
    ]
  });
  alert.present();
}

removeItem(item, index) {
  const toast = this.toastCtrl.create({
    message: "Removing " + item.name,
    duration: 3000
  });
  
  toast.present();

  this.items.splice(index, 1);
}

}