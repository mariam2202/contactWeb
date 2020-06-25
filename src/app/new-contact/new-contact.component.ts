import { Component, OnInit } from '@angular/core';
import {Contact} from '../models/contact';
import {ContactsService} from '../../services/contacts.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  constructor(private contactsService: ContactsService, private spinner: NgxSpinnerService) { }

  public contact = new Contact();
/*
  saveContact(contact: Contact){
    // console.log(this.contact);
    this.contactsService.saveContact(contact);
  }
*/
  mode = 1;

  ngOnInit(): void {
  }
  saveContact(contact: Contact){
      this.spinner.show();
      this.contactsService.saveContact(contact).subscribe(
              (result: Contact) => {
                 if (result.id){
                    this.spinner.hide();
                    this.mode = 2;
                    // this.buildMessageModal('Save operation correctly done');
                 }
              },
              error => {
                  this.spinner.hide();
                  // this.buildMessageModal('An error occurs when saving the book data');
              }
      );
  }

}
