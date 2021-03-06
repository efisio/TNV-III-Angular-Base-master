import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticalCardComponent } from './statistical-card.component';

describe('StatisticalCardComponent', () => {
  let component: StatisticalCardComponent;
  let fixture: ComponentFixture<StatisticalCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticalCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
