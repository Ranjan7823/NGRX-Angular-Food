import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestuarntitemsComponent } from './restuarntitems.component';

describe('RestuarntitemsComponent', () => {
  let component: RestuarntitemsComponent;
  let fixture: ComponentFixture<RestuarntitemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestuarntitemsComponent]
    });
    fixture = TestBed.createComponent(RestuarntitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
