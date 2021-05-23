import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = []

  constructor() { }

  readAll(): Observable<User[]> {
    return of(this.users);
  }

  read(id: string): Observable<User> {
    const { user } = this.findUserById(id);

    if (!user) throw new Error('User not found');
    return of(user);
  }

  create(data: any): Observable<User> {
    const id = new Date().getTime().toString();
    const user: User = {
      id,
      ...data
    }
    this.users.push(user);

    return of(user);
  }

  update(id: string, data: any) {
    let { index, user } = this.findUserById(id);
    user = {...user, ...data};
    this.users[index] = user;
  }

  delete(id: string) {
    const { index } = this.findUserById(id);
    this.users.splice(index, 1);
  }

  searchByName(name: string): Observable<User[]> {
    const user = this.users.find(user => user.name === name);

    if(!user) throw new Error('User not found');
    return of([user]);
  }

  private findUserById(id: string): { index: number, user: User } {
    const index = this.users.findIndex(user => user.id === id);
    const user = this.users[index];

    if(!user) throw new Error('User not found');

    return { index, user };
  }
}
