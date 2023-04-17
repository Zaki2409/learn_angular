import { DatePipe } from "@angular/common";
import { Component } from "@angular/core";

@Component ({
    selector: 'app-hero-birthday',
    template: "<p>the hero birth day is {{birthday | date}}</p>"
})
export class HeroBirthdayComponent {
    birthday = new Date(1988 , 3 ,5);
}