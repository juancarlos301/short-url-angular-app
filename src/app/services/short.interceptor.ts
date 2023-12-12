import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { ObservableInput, catchError, throwError } from 'rxjs';
export const shortInterceptor: HttpInterceptorFn = (req, next) => {
  const TOKEN = 'here insert a token';

  req = req.clone({ setHeaders: { Authorization: 'Bearer ' + TOKEN } });
  return next(req).pipe(
    catchError((error: HttpErrorResponse): ObservableInput<any> => {
      console.log(error);
      return throwError(() => error);
    })
  );
};
