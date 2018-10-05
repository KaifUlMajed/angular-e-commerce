import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { FbUserService } from './fb-user.service';
import { Observable, of } from 'rxjs';
import { AppUser } from '../models/app.user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute, private fbService: FbUserService) { }

  login() {
    this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }
  get fbUser(): Observable<firebase.User> {
    return this.afAuth.user;
  }
  get appUser(): Observable<AppUser> {
    return this.fbUser.pipe(
      switchMap(fbUser => {
        if (fbUser)
          return this.fbService.getUser(fbUser.uid);
        return of(null);
      }));
  }
}
