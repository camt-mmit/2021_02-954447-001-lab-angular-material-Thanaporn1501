import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleContactListPageComponent } from './google-contact-list-page.component';

describe('GoogleContactListPageComponent', () => {
  let component: GoogleContactListPageComponent;
  let fixture: ComponentFixture<GoogleContactListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleContactListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleContactListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
