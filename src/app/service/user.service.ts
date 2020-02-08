import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from "rxjs";
import { User } from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afs: AngularFirestore) { }

  getAllUsers(): Observable<User[]> {
    return this.afs.collection<User>('users').valueChanges({ idField: 'id' });
  }
}
