import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFoodComponent } from './select-item.component';

describe('SelectFoodComponent', () => {
  let component: SelectFoodComponent;
  let fixture: ComponentFixture<SelectFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectFoodComponent]
    });
    fixture = TestBed.createComponent(SelectFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
