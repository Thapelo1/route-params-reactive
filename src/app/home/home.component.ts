import { Component, OnInit } from '@angular/core';
import {UserService} from "../shared/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users$ = this.userService.getUsers()

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
