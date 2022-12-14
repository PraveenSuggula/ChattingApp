import { Component, OnInit, ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AccountService } from './_services/account.service';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular deployed';
  users: any;
  countUnitTest: number = 10;
  

  constructor(private fb: FormBuilder, private accountService: AccountService) {}
  ngOnInit(): void {
    this.getUsers();
    this.setCurrentUser();
  }

  setCurrentUser(){
    const user: User = JSON.parse(localStorage.getItem('user') || '{}'); 
    this.accountService.setCurrentUser(user);
  }

  getUsers(){
    this.accountService.getAllUsers().subscribe(res => this.users = res);
  }

  showMessageUT(msg:string): string {
    return msg;
  }

  IncrementCountUT(num: number){
    this.countUnitTest = this.countUnitTest + num;
  }

  DecrementCountUT(num: number){
    this.countUnitTest = this.countUnitTest - num;
  }

  
}
