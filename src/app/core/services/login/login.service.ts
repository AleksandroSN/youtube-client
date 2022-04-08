import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { User, UserWithToken } from "@app/shared";
import { FAKE_TOKEN, LOCAL_STORAGE_KEY, LOGIN_PAGE, VIDEO_PAGE } from "@utils";
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
      token: FAKE_TOKEN,
    };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userWithToken));
    this.route.navigateByUrl(`/${VIDEO_PAGE}`);
  }

  loadProfile() {
    const localStorageData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (localStorageData) {
      const savedUser = JSON.parse(localStorageData) as UserWithToken;
      this.user$.next(savedUser);
    }
  }

  logout() {
    this.user$.next(null);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    this.route.navigateByUrl(`/${LOGIN_PAGE}`);
  }
}
