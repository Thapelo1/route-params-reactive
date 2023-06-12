import { Component, OnInit } from '@angular/core';
import {UserService} from "../shared/user.service";
import {ActivatedRoute} from "@angular/router";
import {User} from "../shared/interfaces/user.interface";
import {delay, switchMap} from 'rxjs';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent {
  user$ = this.route.paramMap.pipe(
    delay(500),
    switchMap((params) => {
      return this.userService.getUser(params.get('id'))
    })
  );

  constructor(private userService: UserService, private route: ActivatedRoute) { }


}
