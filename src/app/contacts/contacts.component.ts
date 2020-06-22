import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contact = {nom: 'Derruette', prenom: 'Elik', dateNaissance: '1960-11-25', email: 'maroaslan@hotmail.com', tel: 106578216, photo: './Image/IMG_2.jpg'};


  constructor() { }

  ngOnInit(): void {
  }

}
