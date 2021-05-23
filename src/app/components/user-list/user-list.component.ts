import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  createUserObj = {
    name: 'Alisha',
    email: 'alisha@alisha.com',
    age: 25,
    bio: 'This is my new Bio'
  };

  editUserObj = { name: '', email: '', age: 0, bio: '' };

  users: User[] = [];
  editIndex = -1;
  searchText = '';

  constructor(
    private userService: UserService
  ) { }

  createUser(): void {
    const data = {
      name: this.createUserObj.name,
      email: this.createUserObj.email,
      age: this.createUserObj.age,
      bio: this.createUserObj.bio,
    };

    this.userService.create(data)
      .subscribe(res => {
        console.log(res);
        this.createUserObj = { name: '', email: '', age: 0, bio: ''};
      }, err => {
        console.log(err);
      });
  }

  ngOnInit(): void {
    this.readUsers();
  }

  readUsers(): void {
    this.userService.readAll()
      .subscribe(res => {
        this.users = res;
        console.log(this.users);
      }, err => {
        console.log(err);
      });
  }

  refresh(): void {
    this.readUsers();
    this.editUserObj = { name: '', email: '', age: 0, bio: '' };
    this.editIndex = -1;
  }

  editUser(user: any, index: number): void {
    this.editUserObj = {...user};
    this.editIndex = index;
  }

  cancelUpdate(): void {
    this.editUserObj = { name: '', email: '', age: 0, bio: '' };
    this.editIndex = -1;
  }

  updateUser(userId: string): void {
    this.userService.update(userId, this.editUserObj);
    this.cancelUpdate();
  }

  deleteUser(id: string) {
    this.userService.delete(id);
  }

  cancelSearch() {
    this.searchText = '';
    this.refresh();
  }

  searchByName(): void {
    console.log(this.searchText);
    if(!this.searchText) {
      this.refresh();
      return;
    }
    this.userService.searchByName(this.searchText)
      .subscribe(res => {
        this.users = res;
        console.log(this.users);
      }, err => {
        console.log(err);
      });
  }

}
