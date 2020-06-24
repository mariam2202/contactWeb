import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contact} from '../app/models/contact';
import {Observable} from 'rxjs';

@Injectable()
export class ContactsService {
  constructor(private http: HttpClient) {
  }

  findAll(){
    return this.http.get<Contact[]>('http://localhost:9090/Contacts');
  }

  findByName(name: string){
    return this.http.get<Contact[]>('http://localhost:9090/ChercherParNomContacts?monContact=' + name);
  }

  saveContact(contact: Contact): Observable<Contact>{
    return this.http.post<Contact>('http://localhost:9090/AddContact', contact);
  }
}
