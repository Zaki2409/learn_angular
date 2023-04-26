import { Component } from '@angular/core';

@Component({
  selector: 'app-svg-template',
  templateUrl: './svg-template.component.html',
  styleUrls: ['./svg-template.component.css']
})
export class SvgTemplateComponent {
  fillColor = 'rgb(255, 0, 0)';

  changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.fillColor = `rgb(${r}, ${g}, ${b})`;
  }
}
