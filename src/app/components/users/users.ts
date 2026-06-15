import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-users',
  imports: [AsyncPipe],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users {
  private userService = inject(UserService);

  users$ = this.userService.getUsers();
}
