import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gerichte',
  templateUrl: './gerichte.component.html',
  styleUrls: ['./gerichte.component.scss']
})
export class GerichteComponent {
 @Input () gericht: string = "";
 @Input () preis: number = 0;

}
