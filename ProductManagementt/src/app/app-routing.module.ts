import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { DetailComponent } from './detail/detail.component';
import { ProductsComponent } from './products/products.component';
import { BasketComponent } from './basket/basket.component';

const routes:Routes=[
  {path:"Urunler",component:ProductsComponent},
  {path:"About-Us",component:AboutUsComponent},
  {path:"Detail/:id",component:DetailComponent},
  {path:"Basket",component:BasketComponent}
]

@NgModule({
  exports:[RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
