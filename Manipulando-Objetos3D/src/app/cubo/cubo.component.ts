import { Component, OnInit } from '@angular/core';
import { NgtCanvas } from 'angular-three';


@Component({
  selector: 'app-cubo',
  standalone: true,
  imports: [NgtCanvas],
  templateUrl: './cubo.component.html',
  styleUrls: ['./cubo.component.scss']
})
export class CuboComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {

  }
}
