import { HttpInterceptor, HttpRequest } from "@angular/common/http";

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next) {
    console.log('intercept')
    return next.handle(req);
  }
}
