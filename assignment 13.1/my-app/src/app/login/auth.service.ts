import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  usrnm: string;
  password: string;
  db: any = {username: '', password: ''};
  constructor() { }
  logIn() {
    if (this.db.username === this.usrnm && this.db.password === this.password) {
      console.log('returned true');
      return true;
    } else {
      console.log('return false');
      return false;
    }
  }
}
