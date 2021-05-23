import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ UserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create UserList Component', () => {
    expect(component).toBeTruthy();
  });


  it('should disable the Add button when createUserObj is invalid', () => {
    component.createUserObj = {
      name: 'Alisha',
      email: 'alisha@alisha.com',
      age: 25,
      bio: ''
    };
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.add-button'));
    expect(button.nativeElement.disabled).toBeTruthy();
  });

  it('should disable the Add button when createUserObj is invalid', () => {
    component.createUserObj = {
      name: 'Alisha',
      email: 'alisha@alisha.com',
      age: 25,
      bio: 'This is my new bio'
    };
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.add-button'));
    expect(button.nativeElement.disabled).toBeFalsy();
  });

});
