import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../../services/contacts.service';
import {Contact} from '../models/contact';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.css']
})
export class NouveauContactComponent implements OnInit {

  constructor(private contactsService: ContactsService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  onSaveContact(dataForm) {
    this.spinner.show();
    this.contactsService.saveContact(dataForm).subscribe(
      (result: Contact) => {
        if (result.id){
          this.spinner.hide();
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
