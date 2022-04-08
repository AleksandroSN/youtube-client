import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { User, UserWithToken } from "@app/shared";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class LoginService {
  user$ = new BehaviorSubject<User | null>(null);

  constructor(private route: Router) {}

  get isAuthorize() {
    return !!this.user$.value;
  }

  login(user: User) {
    this.user$.next(user);
    const userWithToken: UserWithToken = {
      ...user,
      token: "SAFDSFADFDJKHJBJf",
    };
    localStorage.setItem("auth_data", JSON.stringify(userWithToken));
    this.route.navigateByUrl("/video");
  }

  loadProfile() {
    const localStorageData = localStorage.getItem("auth_data");
    if (localStorageData) {
      const savedUser = JSON.parse(localStorageData) as UserWithToken;
      this.user$.next(savedUser);
    }
  }

  logout() {
    this.user$.next(null);
    localStorage.removeItem("token");
    this.route.navigateByUrl("/login");
  }
}
