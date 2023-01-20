import { Component, OnInit } from '@angular/core';

interface Link {
  id: string;
  text: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  links: Link[] = [
    { id: 'ModelS', text: 'Model S' },
    { id: 'Model3', text: 'Model 3' },
    { id: 'ModelX', text: 'Model X' },
    { id: 'ModelY', text: 'Model Y' },
    { id: 'SolarRoof', text: 'Solar Roof' },
    { id: 'SolarPanels', text: 'Solar Panels' },
  ];

  externalLinks: Link[] = [
    { id: 'Shop', text: 'Shop' },
    { id: 'Account', text: 'Account' },
    { id: 'Menu', text: 'Menu' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
