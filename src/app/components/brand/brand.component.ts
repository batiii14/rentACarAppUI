import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands: any[] 
  constructor(private brandService:BrandService){}
  ngOnInit(): void {
    this.getBrands()
  }


  getBrands(){
    this.brandService.getBrands().subscribe(data=>(this.brands=data))
  }

}


