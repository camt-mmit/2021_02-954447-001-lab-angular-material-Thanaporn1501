import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleContactsService } from '../../google-contacts.service';

@Component({
  selector: 'app-google-contact-list-page',
  templateUrl: './google-contact-list-page.component.html',
  styleUrls: ['./google-contact-list-page.component.scss'],
})
export class GoogleContactListPageComponent implements OnInit {
  data$!: Observable<any>;

  constructor(private readonly service: GoogleContactsService) {}

  ngOnInit(): void {
    this.data$ = this.service.getAll();
  }
}
