import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  userLoggedIn = false;
  loginedUserName: string = '';

  constructor(private accountService: AccountService, private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.accountService.currentUser$.subscribe(loggedIn =>
      {
        if(loggedIn){
          this.loginedUserName = loggedIn.userName;
          this.userLoggedIn = loggedIn.userName !== undefined ? true : false;
        }
      })
  }

  login(): void {
    this.accountService.login(this.model).subscribe({
      next: (res) => {
        this.toastr.success('Login Success', 'Success')
        this.router.navigateByUrl('/members');
      },
      error: (err) => {
        this.toastr.error(err.error, 'Failed');
      }
    });
  }
  logout(): void {
    this.router.navigateByUrl('/');
    this.accountService.logout();
  }

}
