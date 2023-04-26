import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
title ='PIPE';
birthday = new Date(2003,9,24);
birthday1 = new Date(1988,3,18);
toggle =true;
get format() {return this.toggle ? 'shortDate' : 'fullDate' ;}
toggleFormat() {this.toggle =! this.toggle}
}

