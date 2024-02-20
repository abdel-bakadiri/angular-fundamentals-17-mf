import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>First Name: {{ user.firstName }}</p>
    <p>Last Name: {{ user.lastName }}</p>
    <p>City: {{ user.city }}</p>
  `,
  styles: ``,
})
export class UserInfoComponent {
  user = {
    lastName: 'BAKADIRI',
    firstName: 'Abdelouahab',
    city: 'Paris',
  };
}
