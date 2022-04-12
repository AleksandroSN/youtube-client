import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";
import { Observable } from "rxjs";
import { API_URL, CHUNK_SEARCH_URL, CHUNK_VIDEO_URL } from "@utils";
import { environment } from "@environments/environment";

@Injectable()
export class YoutubeInterceptor implements HttpInterceptor {
  // eslint-disable-next-line class-methods-use-this
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const { url } = req;
    if (url.startsWith(CHUNK_SEARCH_URL) || url.startsWith(CHUNK_VIDEO_URL)) {
      const modifyReq: HttpRequest<unknown> = req.clone({
        url: `${API_URL}${url}&key=${environment.YOUTUBE_API_KEY}`,
      });
      return next.handle(modifyReq);
    }
    return next.handle(req);
  }
}
