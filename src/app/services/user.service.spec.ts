import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should create a User in users array", () => {
    const user = {
      name: 'Alisha',
      email: 'alisha@alisha.com',
      age: 25,
      bio: 'This is my new Bio'
    };
    service.create(user);
    expect(service.users.length).toBeGreaterThanOrEqual(1);
  });

  it("should delete a User from users array", () => {
    const user = {
      name: 'Alisha',
      email: 'alisha@alisha.com',
      age: 25,
      bio: 'This is my new Bio'
    };
    service.create(user).subscribe(res => {
      service.delete(res.id);
    });
    expect(service.users.length).toBeLessThan(1);
  });

});
