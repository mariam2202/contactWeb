import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ContactsComponent} from './contacts/contacts.component';
import {NewContactComponent} from './new-contact/new-contact.component';
import {NouveauContactComponent} from './nouveau-contact/nouveau-contact.component';


const appRoutes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'new-contact', component: NewContactComponent},
  {path: 'nouveau-contact', component: NouveauContactComponent},
  {path: '', redirectTo: '/about', pathMatch: 'full'}
  // {path: 'customer-page', component: CustomerPageComponent},
  // {path: 'loan-page', component: LoanPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
