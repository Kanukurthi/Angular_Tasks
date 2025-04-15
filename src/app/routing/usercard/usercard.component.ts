import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrl: './usercard.component.css'
})
export class UsercardComponent {
  user: any;

  constructor(private route: ActivatedRoute, private userService: UserService) {
    const userId = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUsers().subscribe(users => {
      this.user = users.find(u => u.id === userId);
    });
  }

}
