import { Component } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { JsonPipe } from '@angular/common';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent, JsonPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: any[] = [];
  // products :any=[
  //   {id:1, name:"product1"},
  //   {id:2, name:"product2"},
  //   {id:3, name:"product3"},
  // ]
  constructor(private productSevise:ProductService){
    this.getProducts()
    this.getData()
  }
  test(ev:any):void{
    console.log(ev)
    const item = this.products.findIndex((x:any) => x.id ===ev.id)
    const newList: any[] = this.products.splice(item, 1)
    console.log(newList)
  }

  private getProducts():void{
    this.productSevise.getProducts().subscribe( (value: any) => {
      this.products=value
      // console.log(value)
    })
    
  }

  private getData(){
    const cc = this.productSevise.getItem()
    console.log(cc)
  }
}
