import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Platform } from '@ionic/angular';
import { Map, MapirComponent, MapirService } from 'mapir-angular';
import { MapOperator } from 'rxjs/internal/operators/map';
import { map } from 'leaflet';
//import {  tileLayer, marker } from 'leaflet';
var lat;
var lng;
var currentlocation = {lat: "", lng: ""};
var L;
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage  {

  constructor(public router: Router,
   private geolocation: Geolocation,
   private map:Map ) { }




  setting(){
this.router.navigateByUrl('/setting')

  }
  schedule(){
    this.router.navigateByUrl('/schedule')
  }
  stop(){
    this.router.navigateByUrl('/stops')
  }

 
currentposition(position){
 this. geolocation.getCurrentPosition().then((position) => {
 lat= position.coords.latitude;
 lng= position.coords.longitude;
         console.log('My latitude : ', position.coords.latitude);
        console.log('My longitude: ', position.coords.longitude);
        currentlocation.lat = lat;
        currentlocation.lng = lng;

       //const markPoint = marker([lat, lng]);
       //var marker = marker([lat, lng]).addTo(this.map);
       
    });
  

}
}
 // currentlocation(){
  //  this.geolocation.getCurrentPosition().then((resp) => {
  //      resp.coords.latitude
  //     resp.coords.longitude
  //    }).catch((error) => {
  //      console.log('Error getting location', error);
  //    });
     
  //    let watch = this.geolocation.watchPosition();
  //    watch.subscribe((data) => {
  //     // data can be a set of coordinates, or an error (if an error occurred).
  //     data.coords.latitude
  //     data.coords.longitude
  //    });
    
//}}
