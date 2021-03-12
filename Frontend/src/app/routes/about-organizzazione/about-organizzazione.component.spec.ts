import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOrganizzazioneComponent } from './about-organizzazione.component';

describe('AboutOrganizzazioneComponent', () => {
  let component: AboutOrganizzazioneComponent;
  let fixture: ComponentFixture<AboutOrganizzazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutOrganizzazioneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutOrganizzazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
