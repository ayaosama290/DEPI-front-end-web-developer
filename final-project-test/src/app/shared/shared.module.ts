import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { FooterComponent } from './footer/footer.component';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';



@NgModule({
  declarations: [
    // FooterComponent,
    // BottonNavComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgSelectModule,
    FontAwesomeModule
  ],
  exports : [
    ReactiveFormsModule,
    NgSelectModule,
    FontAwesomeModule,
  ]
})
export class SharedModule { }
