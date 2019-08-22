import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarDetailComponent } from './top-bar-detail.component';

describe('TopBarDetailComponent', () => {
  let component: TopBarDetailComponent;
  let fixture: ComponentFixture<TopBarDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopBarDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBarDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
