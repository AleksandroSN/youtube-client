import { Injectable } from "@angular/core";
import {
  CanActivate, CanLoad, Router, UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "../services";

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private router: Router, private loginService: LoginService) {}

  canActivate() {
    return this.checkLogin();
  }

  canLoad():
  | boolean
  | UrlTree
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree> {
    return this.checkLogin();
  }

  checkLogin() {
    const login = this.loginService.isAuthorize;
    if (!login) {
      this.router.navigateByUrl("/login");
    }
    return login;
  }
}
