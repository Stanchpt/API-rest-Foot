/* eslint-disable prettier/prettier */
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class EstiamGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const { headers } = request;

    if (
      !headers.authorization ||
      !headers.authorization.includes('@estiam.com')
    ) {
      return false;
    }

    return true;
  }
}
