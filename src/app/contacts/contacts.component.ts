import {Component, OnInit} from '@angular/core';
import {ContactsService} from '../../services/contacts.service';
import {Route, Router} from '@angular/router';
import {Contact} from '../models/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  // contact = {nom: 'Derruette', prenom: 'Elik', dateNaissance: '1960-11-25', email: 'maroaslan@hotmail.com', tel: 106578216, photo: './Image/IMG_2.jpg'};

  contacts = [];
  motCle = '';
  contact: {};
  constructor(private contactsService: ContactsService, private router: Router) {
  }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.contactsService.findByName(this.motCle)
      .subscribe(contacts => this.contacts = contacts);
  }
  chercher() {
    this.getContacts();
  }

  onEditContact(id: number) {
    this.router.navigate(['/edit-contact', id]);
  }

  onSupprimeContact(c: Contact) {
    let conf = window.confirm('Etes vous sur?');
    if (conf === true) {
      this.contactsService.deleteContact(c)
        .subscribe(data => {
          this.contacts.splice(this.contacts.indexOf(c), 1);
        }, err => {
          console.log('non');
        });
    }
  }
}
