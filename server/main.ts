import { Meteor } from 'meteor/meteor';
import * as Moment from 'moment';
import { Images } from '../imports/collections/images';

Meteor.startup(() => {
  if (Images.find({}).cursor.count() === 0) {
    let chatId;

    Images.collection.insert({
      title: 'Wilma Alanoca',
      picture: 'https://s3-us-west-1.amazonaws.com/next-level-images/Media/dakar/alanoca.jpg'
    });

    Images.collection.insert({
      title: 'Chavo Salvatierra',
      picture: 'https://s3-us-west-1.amazonaws.com/next-level-images/Media/dakar/chavo.jpg'
    });

    Images.collection.insert({
      title: 'Alberto Rodrigo Gutiérrez',
      picture: 'https://s3-us-west-1.amazonaws.com/next-level-images/Media/dakar/gutierrez.jpg'
    });
 
    Images.collection.insert({
      title: 'Walter CN Nosiglia',
      picture: 'https://s3-us-west-1.amazonaws.com/next-level-images/Media/dakar/waltern.jpg'
    });
  }
});