import { Component, HostBinding } from "@angular/core";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent {
  profileName = "AleksandroSN";

  @HostBinding("class") class = "flex-25";
}
