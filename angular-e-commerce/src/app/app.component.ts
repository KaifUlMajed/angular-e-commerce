import { Component, OnDestroy } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FbUserService } from './services/fb-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'app';
  authSubscription: Subscription;

  constructor(private auth: AuthService, private router: Router, private fb: FbUserService) {
   this.authSubscription = auth.fbUser.subscribe(
      user => {
        if (user){
          fb.saveUser(user);
          let returnUrl = localStorage.getItem('returnUrl');
          router.navigateByUrl(returnUrl);
        }
      } 
    );
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
