import { Component, OnInit } from '@angular/core';
import {Contact} from '../models/contact';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactsService} from '../../services/contacts.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  mode = 1;
  id: number;
  constructor(private activated: ActivatedRoute, private contactsService: ContactsService, private router: Router) {
  }

  contact = new Contact();

  ngOnInit() {
    this.id = +this.activated.snapshot.params['id'];
    this.contactsService.displayContact(this.id)
      .subscribe(contact => this.contact = contact);
  }

  majContact() {
    this.contactsService.updateContact(this.contact)
      .subscribe(contact => this.contact = contact);
    this.router.navigate(['contacts']);
  }
}
