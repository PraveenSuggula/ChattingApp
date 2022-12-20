import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any = {}
  userLoggedIn = false;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.currentUser$.subscribe(loggedIn =>
      this.userLoggedIn = loggedIn?.userName !== undefined ? true : false );
  }

  login(): void{
    this.accountService.login(this.model).subscribe(res => {
      console.log(res);
    });
  }
  logout():void{
    this.accountService.logout();
  }

}
