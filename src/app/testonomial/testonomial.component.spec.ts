import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestonomialComponent } from './testonomial.component';

describe('TestonomialComponent', () => {
  let component: TestonomialComponent;
  let fixture: ComponentFixture<TestonomialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestonomialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestonomialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
