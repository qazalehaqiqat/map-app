import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

// import { Map, MapirComponent, MapirService } from 'mapir-angular';
import { MapOperator } from 'rxjs/internal/operators/map';
import { Map, tileLayer, marker, icon, latLng, featureGroup , circle} from 'leaflet';
import * as L from 'leaflet';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage  {
  lat: any;
  lng: any;
  map: Map;
  constructor(public http: HttpClient, public router: Router,
              public plt: Platform  , public geolocation: Geolocation,
              ) { }


   // tslint:disable-next-line:use-life-cycle-interface
   ngAfterViewInit() {
    this.plt.ready().then(() => {
      this.http.get('https://oghuxxw1e6.execute-api.us-east-1.amazonaws.com/dev')
      .subscribe(restaurants => this.initMap(restaurants));
    });
  }

  initMap(restaurants) {
    console.log(restaurants);
    // tslint:disable-next-line:no-shadowed-variable
    navigator.geolocation.getCurrentPosition(loc => {

      const customMarkerIcon = icon({
        iconUrl: 'assets/icon/loc-1.png',
        iconSize: [64, 64],
        popupAnchor: [0, -20]
      });
      // const latlng = new latLng(location.coords.latitude, location.coords.longitude);

      // tslint:disable-next-line:no-shadowed-variable
      const map = new Map('map');

      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      map.locate({
        setView: true,
        maxZoom: 10
      });

      map.on('click', addMarker);

      function addMarker(e) {
        // Add marker to map at click location; add popup window

        if (current_position !== undefined) {
          map.removeLayer(current_position);
        }
        current_position = L.marker(e.latlng, { icon: customMarkerIcon }).addTo(map);
    }


      // tslint:disable-next-line:variable-name
      let current_position, current_accuracy;

      function onLocationFound(e) {
        // if position defined, then remove the existing position marker and accuracy circle from the map
        if (current_position) {
            map.removeLayer(current_position);
            map.removeLayer(current_accuracy);
        }

        const radius = e.accuracy / 2;

        current_position = L.marker(e.latlng).addTo(map)
          .bindPopup('You are within ' + radius + ' meters from this point').openPopup();

        current_accuracy = L.circle(e.latlng, radius).addTo(map);
      }

      // map.on('locationfound', (e) => {
      //   const markerGroup = featureGroup();
      //   this.lat = e.latitude;
      //   this.lng = e.longitude;
      //   map.setView([this.lat, this.lng], 17);
      //   const markerr: any = marker([e.latitude, e.longitude], { icon: customMarkerIcon }).on('click', () => {
      //     alert('Marker clicked');
      //   });
      //   circle(e.latlng, e.accuracy).addTo(map);
      //   markerGroup.addLayer(markerr);
      //   map.addLayer(markerGroup);
      //   }).on('locationerror', (err) => {
      //     alert(err.message);
      // });


      restaurants.forEach((restaurant) => {
        marker([restaurant.position.lat, restaurant.position.lgn], { icon: customMarkerIcon })
          .bindPopup(`<b>${restaurant.title}</b>`, { autoClose: false })
          .on('click', () => this.router.navigateByUrl('/restaurant'))
          .addTo(map).openPopup();
      });
    });
  }

  setting() {
      this.router.navigateByUrl('/setting');
  }
  schedule() {
      this.router.navigateByUrl('/schedule');
  }
  stop() {
      this.router.navigateByUrl('/stops');
  }


// currentposition(position) {
//  // tslint:disable-next-line:no-shadowed-variable
//  this.geolocation.getCurrentPosition().then((position) => {
//  this.lat = position.coords.latitude;
//  this.lng = position.coords.longitude;
//  console.log('My latitude : ', position.coords.latitude);
//  console.log('My longitude: ', position.coords.longitude);
//  current_position.lat = this.lat;
//  current_position.lng = this.lng;

//     });

// }


}
