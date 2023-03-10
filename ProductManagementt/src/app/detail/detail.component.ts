import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasketList } from '../models/Basket.DataSource';
import { Product } from '../models/Product';
import { ProductServicesService } from '../product-services.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
//http://localhost:4200/Detail/3

  @Input() product:Product | undefined;
  basketNumber=1;
  constructor(
    private productServices:ProductServicesService,
    private route:ActivatedRoute){}

    ngOnInit(): void {
      this.getProduct();
    }
    getProduct(): void{
      const id = this.route.snapshot.paramMap.get('id');
      this.productServices.getSingleProduct(Number(id))
      .subscribe(urun=>this.product=urun)
    } 

    minusProduct(){
      this.basketNumber--;
      if(this.basketNumber <= 0)this.basketNumber = 0
      
    }
    plusProduct(number:any){
      this.basketNumber++;
      if(this.basketNumber <= 0)this.basketNumber = number
      
      
    }

basketid = 0;
BasketProduct : Product | undefined;
    addBasket(productid:any,quantity:any){
      const basket = new Basket(this.basketid, productid, quantity);
      this.productList?find(this.basketproduct => basketproduct.Id === productid)
      this.BasketList?.stock -= quantity;
      BasketList.push(basket)

    }
    getBasketList(){
      return BasketList;
    }
}

