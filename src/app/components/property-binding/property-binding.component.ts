import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {
title ='PB';
itemImageUrl = '../assets/phone.svg';
  isUnchanged = true;
  classes = 'special';
  parentItem = 'lamp';
  datafromchild='no data';
  fromchild(z:string) {
 this.datafromchild=z;
 const zz = 'the data which came from child is ' + z;
 window.alert(zz);
  };

  currentItems = [{
    id: 21,
    name: 'phone'
  }];

  interpolationTitle = 'Interpolation';
  propertyTitle = 'Property binding';

  evilTitle = 'Template <script>alert("evil never sleeps")</script> Syntax';
  clickme() {
    const msg = this.gettext();
    window.alert(msg);
  }
  gettext() {
    return 'zaki'
  }
}
