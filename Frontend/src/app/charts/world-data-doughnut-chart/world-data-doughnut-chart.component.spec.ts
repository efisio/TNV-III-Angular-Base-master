import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldDataDoughnutChartComponent } from './world-data-doughnut-chart.component';

describe('WorldDataDoughnutChartComponent', () => {
  let component: WorldDataDoughnutChartComponent;
  let fixture: ComponentFixture<WorldDataDoughnutChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldDataDoughnutChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldDataDoughnutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
