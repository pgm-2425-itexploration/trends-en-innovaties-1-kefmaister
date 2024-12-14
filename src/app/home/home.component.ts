import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { HousingLocation } from "../housinglocation";
import { HousingService } from "../housing.service";
@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter />
        <button
          class="primary"
          type="button"
          (click)="filterResult(filter.value)"
        >
          Search
        </button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of filteredLocationlist"
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
  `,
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  readonly baseUrl = "https://angular.dev/assets/images/tutorials/common";
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationlist: HousingLocation[] = [];

  constructor() {
    this.housingService
      .getAllHousingLocations()
      .then((housingLocationList: HousingLocation[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationlist = housingLocationList;
      });
  }

  filterResult(text: string) {
    if (!text) this.filteredLocationlist = this.housingLocationList;

    this.filteredLocationlist = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city
          .toLocaleLowerCase()
          .includes(text.toLocaleLowerCase())
    );
  }
}
