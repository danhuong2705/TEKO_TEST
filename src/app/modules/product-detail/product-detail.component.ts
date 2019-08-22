import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailService } from 'src/app/services/ProductDetail/product-detail.service';
import { ProductDetail } from 'src/app/models/ProductDetail';
import { Product } from 'src/app/models/product';
import { ProductListService } from 'src/app/services/ProductListService/product-list.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  id: string;
  productDetail: ProductDetail;
  title = 'ngSlick';
  productList: Product[];
  imageConfig = {
    nextArrow: '<div class=\'nav-btn next-slide\'></div>',
    prevArrow: '<div class=\'nav-btn prev-slide\'></div>',
    method: {},
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  slideConfig = {
    nextArrow: '<div class=\'nav-btn next-slide\'></div>',
    prevArrow: '<div class=\'nav-btn prev-slide\'></div>',
    method: {},
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  };
  constructor(
    private productDetailService: ProductDetailService,
    private route: ActivatedRoute,
    private productListService: ProductListService
  ) { }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('productId');
    });
    this.getProductDetail(this.id);
    this.getProductList();
  }
  getProductDetail(id: string): void {
    this.productDetailService.getProductDetail(id).subscribe(res => {
      if (res && res.result && res.result.product && res.result.product) {
        this.productDetail = res.result.product;
      }
    });
  }
  getProductList(): void {
    this.productListService.getProductList().subscribe(res => {
      if (res && res.result && res.result.products) {
        this.productList = res.result.products;
      }
    });
  }
  trackByFn(index, item): void {
    return index;
  }
}
