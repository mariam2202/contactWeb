import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contact} from '../app/models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  constructor(private http: HttpClient) {
  }

  findAll(){
    return this.http.get<Contact[]>('http://localhost:9090/Contacts');
  }
}
