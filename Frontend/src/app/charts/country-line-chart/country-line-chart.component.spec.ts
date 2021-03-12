import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryLineChartComponent } from './country-line-chart.component';

describe('CountryLineChartComponent', () => {
  let component: CountryLineChartComponent;
  let fixture: ComponentFixture<CountryLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
