import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";
import { Observable } from "rxjs";


export class InterceptorService implements HttpInterceptor {

    intercept(req: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
        if (localStorage.getItem('token')) {
            var cloneReq = req.clone({
                headers: req.headers.set('token', localStorage.getItem('token'))
            })
            return handler.handle(cloneReq)
        }
        else {
            return handler.handle(req)
        }

    }

}