import { HttpInterceptor, HttpRequest } from "@angular/common/http";

export class LoggingInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next) {
    console.log('request');
    const modifiedRequest = req.clone({
      headers: req.headers.append('Auth', 'xyz')})
    return next.handle(modifiedRequest);
  }
}
