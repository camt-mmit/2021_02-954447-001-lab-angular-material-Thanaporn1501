import { CdkPortal, Portal } from '@angular/cdk/portal';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { SidenavPortalServiceService } from 'src/app/sidenav-portal-service.service';
import { GoogleTokenService } from '../../google-token.service';

@Component({
  selector: 'app-google-contact',
  templateUrl: './google-contact.component.html',
  styleUrls: ['./google-contact.component.scss'],
})
export class GoogleContactComponent implements OnInit, AfterViewInit {
  @ViewChild(CdkPortal) portal!: Portal<unknown>;

  tokenReady$!: Observable<boolean | null>;
  authorizationLinks$!: Observable<string>;

  constructor(
    private readonly sidenavPortalService: SidenavPortalServiceService,
    private readonly TokenService: GoogleTokenService,
  ) {}

  ngOnInit(): void {
    this.tokenReady$ = this.TokenService.tokenReady$;
    this.authorizationLinks$ = this.TokenService.getAuthorizationLink();
  }
  ngAfterViewInit(): void {
    this.sidenavPortalService.setPortal(this.portal);
  }
}
