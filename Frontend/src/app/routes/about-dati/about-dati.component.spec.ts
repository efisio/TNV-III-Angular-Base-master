import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDatiComponent } from './about-dati.component';

describe('AboutDatiComponent', () => {
  let component: AboutDatiComponent;
  let fixture: ComponentFixture<AboutDatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutDatiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutDatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
