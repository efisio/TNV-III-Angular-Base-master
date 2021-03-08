import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldDataBarChartComponent } from './world-data-bar-chart.component';

describe('WorldDataBarChartComponent', () => {
  let component: WorldDataBarChartComponent;
  let fixture: ComponentFixture<WorldDataBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldDataBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldDataBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
