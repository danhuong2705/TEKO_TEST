import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductListService } from 'src/app/services/ProductListService/product-list.service';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CONSTANT, URL_CONSTANTS } from 'src/app/constants/common.constants';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList: Product[];
  configPaging: any;
  constructor(private productListService: ProductListService, private router: Router, private route: ActivatedRoute) {
    this.configPaging = {
      currentPage: 1,
      itemsPerPage: CONSTANT.PAGE_SIZE,
      totalItems: 0
      };
    route.queryParams.subscribe(
        params => this.configPaging.currentPage = params.page ? params.page : 1 );
  }
  ngOnInit() {
    this.getProductList();
  }
  getProductList(): void {
    this.productListService.getProductList().subscribe(res => {
      if (res && res.result && res.result.products) {
        this.productList = res.result.products;
      }
    });
  }
  onClick(id: any) {
    this.router.navigateByUrl(URL_CONSTANTS.URL_PRODUCT_DETAIL + id);
  }
  trackByFn(index, item): void {
    return index;
  }

  pageChange(newPage: number) {
    this.router.navigate([URL_CONSTANTS.URL_HOME_PAGE], { queryParams: { page: newPage } });
  }

}
