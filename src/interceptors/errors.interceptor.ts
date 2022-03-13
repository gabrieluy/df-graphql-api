
import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
    HttpStatus,
    BadRequestException,
    InternalServerErrorException,
  } from '@nestjs/common';
  import { Observable, throwError } from 'rxjs';
  import { catchError } from 'rxjs/operators';

  @Injectable()
  export class ErrorsInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      return next
        .handle()
        .pipe(
          catchError(ex => throwError(() => {
            if (ex.status === HttpStatus.BAD_REQUEST) {
              return new BadRequestException(ex?.message);
            } else {
              return new InternalServerErrorException(ex?.message);
            }
          }),
        )
      );
    }
  }
  
  
