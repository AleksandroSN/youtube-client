import {
  Component, HostBinding, OnDestroy, OnInit,
} from "@angular/core";
import { LoginService } from "@app/core/services";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit, OnDestroy {
  destroy$ = new Subject<boolean>();

  profileName?: string;

  @HostBinding("class") class = "flex";

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.getProfileName();
  }

  getProfileName() {
    this.loginService.user$.pipe(takeUntil(this.destroy$)).subscribe((user) => {
      this.profileName = user?.login;
    });
  }

  onClick() {
    this.loginService.logout();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
