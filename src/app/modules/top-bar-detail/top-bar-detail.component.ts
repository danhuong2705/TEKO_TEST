import { Component, OnInit, Input } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-top-bar-detail',
  templateUrl: './top-bar-detail.component.html',
  styleUrls: ['./top-bar-detail.component.scss']
})
export class TopBarDetailComponent implements OnInit {
 @Input() name: string;
 @Input() sellPrice: number;
  constructor(private location: Location) { }

  ngOnInit() {
  }
  onClick() {
    this.location.back();
  }
}
