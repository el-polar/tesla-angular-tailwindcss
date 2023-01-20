import { Component, OnInit } from '@angular/core';
import { Link } from '../shared/link.interface';

@Component({
  selector: 'app-car-model',
  templateUrl: './car-model.component.html',
  styleUrls: ['./car-model.component.css'],
})
export class CarModelComponent implements OnInit {
  cars: Link[] = [
    { id: 'ModelS', text: 'Model S' },
    { id: 'Model3', text: 'Model 3' },
    { id: 'ModelX', text: 'Model X' },
    { id: 'ModelY', text: 'Model Y' },
    { id: 'SolarRoof', text: 'Solar Roof' },
    { id: 'SolarPanels', text: 'Solar Panels' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
