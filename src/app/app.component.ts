import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map, Observable } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { Portal } from '@angular/cdk/portal';
import { SidenavPortalServiceService } from './sidenav-portal-service.service';

const smallwidth = 600;
const mediaQuerySmall = `(max-width: ${smallwidth}px)`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  isSmallScreen$!: Observable<boolean>;
  portal$!: Observable<Portal<unknown> | null>;

  constructor(
    private readonly breakpointObserver: BreakpointObserver,
    private readonly sidenavPortalService: SidenavPortalServiceService,
  ) {}

  ngOnInit(): void {
    this.isSmallScreen$ = this.breakpointObserver
      .observe(mediaQuerySmall)
      .pipe(map((result) => result.matches));

    this.portal$ = this.sidenavPortalService.portal$;
  }
}
