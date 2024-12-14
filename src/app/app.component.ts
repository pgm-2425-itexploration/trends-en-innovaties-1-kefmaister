import { Component, OnInit } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { RouterModule } from "@angular/router";
import { ThemeService } from "./theme.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [HomeComponent, RouterModule],
  template: `
    <main>
      <header class="brand-name">
        <a [routerLink]="['/']">
          <img
            class="brand-logo"
            src="/assets/logo.svg"
            alt="logo"
            aria-hidden="true"
          />
        </a>
        <button class="button primary" (click)="toggleTheme()">Toggle Light/Dark Mode</button>
      </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "home";
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.initTheme();
  }
  toggleTheme(): void {
    this.themeService.toggleMode();
  }
}
