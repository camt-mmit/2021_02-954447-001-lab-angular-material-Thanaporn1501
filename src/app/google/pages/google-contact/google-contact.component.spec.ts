import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleContactComponent } from './google-contact.component';

describe('GoogleContactComponent', () => {
  let component: GoogleContactComponent;
  let fixture: ComponentFixture<GoogleContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
