import {Component, OnInit} from '@angular/core';
import {ContactsService} from '../../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  // contact = {nom: 'Derruette', prenom: 'Elik', dateNaissance: '1960-11-25', email: 'maroaslan@hotmail.com', tel: 106578216, photo: './Image/IMG_2.jpg'};

  contacts = [];

  constructor(private contactsService: ContactsService) {
  }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.contactsService.findAll()
      .subscribe(contacts => this.contacts = contacts);
  }
}


