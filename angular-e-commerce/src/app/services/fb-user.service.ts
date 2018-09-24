import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AppUser } from '../models/app.user';

@Injectable({
  providedIn: 'root'
})
export class FbUserService {

  constructor(private db: AngularFireDatabase) { }

   saveUser(user: firebase.User) {
    this.db.object("/users/"+ user.uid).update({
      name: user.displayName,
      email: user.email  
    });
  }
    getUser(id: string) {
      return this.db.object<AppUser>("/users/" + id).valueChanges();
    }
  // updateItem(key: string, newText: string) {
  //   this.usersRef.set(key, newText);
  // }
  // deleteItem(key: string) {
  //   this.usersRef.remove(key);
  // }
  // deleteEverything() {
  //   this.usersRef.remove();
  // }
}
