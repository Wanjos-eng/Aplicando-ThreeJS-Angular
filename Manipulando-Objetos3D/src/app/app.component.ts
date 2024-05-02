import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CuboComponent } from './cubo/cubo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CuboComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Manipulando-Objetos3D';
}
