import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
import { FbUserService } from './fb-user.service';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate{

  constructor(private auth: AuthService, private fbService: FbUserService) { }

  canActivate() {
    return this.auth.appUser.pipe(
      map(appUser => appUser.isAdmin)
    );
  }

}
