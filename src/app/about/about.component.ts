import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  infos = {nom: 'Derruette', prenom: 'Elik', dateNaissance: '1960-11-25', email: 'maroaslan@hotmail.com', tel: 106578216, photo: './Image/IMG_2.jpg'};

  constructor() { }

  ngOnInit(): void {
  }

}
