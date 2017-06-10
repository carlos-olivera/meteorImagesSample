import { Component, OnInit } from '@angular/core';
import * as Moment from 'moment';
import { Observable } from 'rxjs';
import { AlertController } from 'ionic-angular';
import { Images } from '../../../../imports/collections/images';
import { Image } from '../../../../imports/models';
import template from './images.html';

@Component({
  template,
  selector: 'images-page'
})
export class ImagesPage implements OnInit {
  images;

  constructor(public alertCtrl: AlertController) {
  }

  ngOnInit() {
    this.images = Images
      .find({}).zone();
  }

  removeImage(image: Image): void {
    Images.remove({_id: image._id}).subscribe(() => {});
  }

  insertImage() {
  let alert = this.alertCtrl.create({
    title: 'Nueva Imagen',
    inputs: [
      {
        name: 'url',
        placeholder: 'URL de la imagen'
      },
      {
        name: 'titulo',
        placeholder: 'Título de la imagen',
      }
    ],
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Insertar',
        handler: data => {
          Images.insert({title: data.titulo, picture: data.url}).subscribe(() => {});
        }
      }
    ]
  });
  alert.present();
}
}