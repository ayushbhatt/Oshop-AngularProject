import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bd-navbar.component.html',
  styleUrls: ['./bd-navbar.component.css']
})
export class BdNavbarComponent{

  constructor(private afAuth: AngularFireAuth) { }

  logout() {
    this.afAuth.auth.signOut();
  }

}
