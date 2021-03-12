import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutVirusComponent } from './about-virus.component';

describe('AboutVirusComponent', () => {
  let component: AboutVirusComponent;
  let fixture: ComponentFixture<AboutVirusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutVirusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutVirusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
