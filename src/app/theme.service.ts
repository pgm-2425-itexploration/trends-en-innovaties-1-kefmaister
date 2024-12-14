// theme.service.ts
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private darkModeKey = "dark-mode";

  isDarkMode(): boolean {
    return localStorage.getItem(this.darkModeKey) === "true";
  }

  enableDarkMode(): void {
    console.log("Enabling dark mode");
    document.body.classList.add("dark-mode");
    localStorage.setItem(this.darkModeKey, "true");
  }

  disableDarkMode(): void {
    console.log("Disabling dark mode");
    document.body.classList.remove("dark-mode");
    localStorage.setItem(this.darkModeKey, "false");
  }

  toggleMode(): void {
    this.isDarkMode() ? this.disableDarkMode() : this.enableDarkMode();
  }

  initTheme(): void {
    if (this.isDarkMode()) {
      this.enableDarkMode();
    } else {
      this.disableDarkMode();
    }
  }
}
