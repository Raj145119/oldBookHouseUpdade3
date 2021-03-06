import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MainsliderComponent } from './mainslider/mainslider.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { BooksellComponent } from './booksell/booksell.component';
import { BookreqAddressComponent } from './bookreq-address/bookreq-address.component';
import { BookSellSearchComponent } from './book-sell-search/book-sell-search.component';
import { DeliveryRequestComponent } from './delivery-request/delivery-request.component';
import { UpdateBookStatusComponent } from './update-book-status/update-book-status.component';
import { ProfileComponent } from './profile/profile.component';
import { ShowBookComponent } from './show-book/show-book.component';
import { BuyBookComponent } from './buy-book/buy-book.component';
import { BookDeliverAddressComponent } from './book-deliver-address/book-deliver-address.component';
import { DeliveryBuyRequestComponent } from './delivery-buy-request/delivery-buy-request.component';
import { UserListComponent } from './user-list/user-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  {path:'',redirectTo:'/mainslider',pathMatch:'full'},
  {path:'home',component:HeaderComponent}, 
  {path:'mainslider',component:MainsliderComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'booksell',component:BooksellComponent},
  {path:'address',component:BookreqAddressComponent},
  {path:'booksellsearch',component:BookSellSearchComponent},
  {path:'deliveryRequest',component:DeliveryRequestComponent},
  {path:'bookStatus',component:UpdateBookStatusComponent},
  {path:'profile',component:ProfileComponent},
  {path:'showbook',component:ShowBookComponent},
  {path:'buybook',component:BuyBookComponent},
  {path:'bookDeliverAddress',component:BookDeliverAddressComponent},
  {path:'deliverBuyRequest',component:DeliveryBuyRequestComponent},
  {path:'userList',component:UserListComponent},
  {path:'editUser',component:EditUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[MainsliderComponent,CheckoutComponent,LoginComponent,
  RegistrationComponent,BooksellComponent,BookreqAddressComponent,BookSellSearchComponent,
  DeliveryRequestComponent,UpdateBookStatusComponent,ProfileComponent,ShowBookComponent,
  BuyBookComponent,BookDeliverAddressComponent,DeliveryBuyRequestComponent,
  UserListComponent,EditUserComponent]
