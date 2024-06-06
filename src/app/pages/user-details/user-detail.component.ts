import { Component, OnItit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailsComponent implements ngOnInIt{
  constructor(private route: ActivatedRoute, public userService: UserService) {}
selectedUser?: any;

  ngOnInit(): void {

    const id = this.route.snapshot.params['id'];
    this.getUser(id);
  }
      getUser(id: number): void {
  this.userService.getUser(id).subscribe({
  next: (data) => {
  console.log(data);
  this.selectedUser = data;
  },
  error: (e) => {
  console.log(e);
  }
  });
}
}

