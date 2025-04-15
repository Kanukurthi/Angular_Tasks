import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User, UserService } from '../../user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  userinfo:User[] = [];

  constructor(private route: ActivatedRoute, private ts: UserService) {
    this.ts.getUsers().subscribe(users => {
      this.route.queryParamMap.subscribe(qparams => {
        const name = qparams.get('name');
        const city = qparams.get('city');
        const email = qparams.get('email');

        this.userinfo = users.filter(user =>
          (!name || user.name.toLowerCase() === name.toLowerCase()) &&
          (!city || user.city.toLowerCase() === city.toLowerCase()) &&
          (!email || user.email.toLowerCase() === email.toLowerCase())
        );
      });
    });
  }

}
