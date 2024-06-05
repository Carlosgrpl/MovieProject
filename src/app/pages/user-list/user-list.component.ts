import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  constructor(public userService: UserService) {}

  ngOnInit() {
    console.log("Dentro de ngOnInit");
    this.userService.getUsers().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (e) => {
        console.log(e);
      }
    });
  }
}