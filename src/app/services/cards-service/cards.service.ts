import { Injectable } from "@angular/core";
import { ResponseModel } from "@shared";
import { HttpServiceService } from "../http-service";

@Injectable({
  providedIn: "root",
})
export class CardsService {
  constructor(private httpService: HttpServiceService) {}

  getResponse() {
    return this.httpService.get<ResponseModel>();
  }
}
