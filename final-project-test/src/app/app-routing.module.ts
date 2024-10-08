import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ContactComponent } from './extra/contact/contact.component';
import { AboutComponent } from './extra/about/about.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { AccountComponent } from './pages/account/account.component';
import { ErrorComponent } from './pages/error/error.component';
import { WishListComponent } from './pages/wish-list/wish-list.component';
import { CartComponent } from './pages/cart/cart.component';
import { canActivateGuard } from './guards/can-activate/can-activate.guard';
import { canDeactivateGuard } from './guards/can-deactivate/can-deactivate.guard';

const routes: Routes = [
  // {path:'home',component:HomeComponent},
  // {path:'home/:categoryId',component:SingleCategoryComponent},
  // {
  //   path:"" , redirectTo:"" , pathMatch:"full"
  // },
  {path:'', component:HomeComponent},
  {path:'home', children:[
    {path: '', component : HomeComponent},
    {path: ':categoryId', component : SingleCategoryComponent},
    // {path: ':categoryId/productDetails', component : ProductDetailComponent},
  ]},
  {path:"product/:id" ,component :ProductDetailComponent},
  {path:'account',component:AccountComponent},
  {path:'signUp',component:SignUpComponent},
  {path:'logIn',component:LogInComponent, canDeactivate: [canDeactivateGuard]},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'wish-list',component:WishListComponent},
  {path:'cart',component:CartComponent},
  { path: 'profile',canActivate:[canActivateGuard], loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
  {path:"**", component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration : 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
