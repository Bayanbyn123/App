import { Component, Input, OnChanges, Output, SimpleChanges,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnChanges {
  products:any[]=[];
  @Input() productInput:any;
  @Output() change:EventEmitter<any>= new EventEmitter();
  ngOnChanges(changes: SimpleChanges): void {
      console.log(this.productInput)
  }
  

  delete(){
    this.change.emit(this.productInput)
  }
  
}
