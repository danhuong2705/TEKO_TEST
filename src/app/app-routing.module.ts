import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './modules/product-list/product-list.component';
import { ProductDetailComponent } from './modules/product-detail/product-detail.component';
import { URL_CONSTANTS } from './constants/common.constants';


const routes: Routes = [
  {path: 'home', component: ProductListComponent},
  { path: 'products/:productId', component: ProductDetailComponent },
  { path: '',   redirectTo: URL_CONSTANTS.URL_HOME_PAGE, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
