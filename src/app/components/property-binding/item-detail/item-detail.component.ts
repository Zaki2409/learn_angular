import { Component, OnInit, Input , Output , EventEmitter } from '@angular/core';
// import { Item } from '../item';
// import { ITEMS } from '../mock-items';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent {

  @Input() childItem = '';

  // items = ITEMS;
@Output() toparent = new EventEmitter<string>();
@Output() toparent2 = new EventEmitter<string>();

sendtoparent() {
  this.toparent.emit('zaki-zaheer');

}

  currentItem = 'bananas in boxes';

}
