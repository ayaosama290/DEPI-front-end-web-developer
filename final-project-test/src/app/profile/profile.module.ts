import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AddressComponent } from './address/address.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AddressesComponent } from './addresses/addresses.component';


@NgModule({
  declarations: [
    ProfileComponent,
    UserProfileComponent,
    AddressComponent,
    AddressesComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class ProfileModule { }
