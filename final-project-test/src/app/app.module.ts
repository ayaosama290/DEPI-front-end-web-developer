import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { AccountComponent } from './pages/account/account.component';
import { CartComponent } from './pages/cart/cart.component';
import { WishListComponent } from './pages/wish-list/wish-list.component';
import { ErrorComponent } from './pages/error/error.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './extra/contact/contact.component';
import { AboutComponent } from './extra/about/about.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { OffersComponent } from './shared/offers/offers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { loginInterceptor } from './interceptor/login.interceptor';
import { SharedModule } from './shared/shared.module';
import { BottomNavComponent } from './shared/bottom-nav/bottom-nav.component';
import { TestComponent } from './pages/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignUpComponent,
    LogInComponent,
    AccountComponent,
    CartComponent,
    WishListComponent,
    ErrorComponent,
    ProductDetailComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    SingleCategoryComponent,
    OffersComponent,
    BottomNavComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    SharedModule
  ],
  providers: [
    provideHttpClient(
      withInterceptors([loginInterceptor])
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
