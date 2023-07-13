import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Speisekarte';

  gerichte : string[] = ['Pizza', 'Nudeln', 'Salat'];
  getraenke : string[] = ['Cola', 'Fanta', 'Bier'];
  nachspeisen : string [] = ['Kuchen', 'Ice', 'Schokolade'];
  preiseGerichte : number[] = [9 , 8 , 10];
  preiseGetraenke : number[] = [3.5 , 3.5 , 4];
  preiseNachspeise : number[] = [3 , 5.5 , 1];


}
