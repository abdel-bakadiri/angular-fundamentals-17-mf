import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1>Fovorites books</h1>
    <ol>
      <li>Seven Effective rule</li>
      <li>Atomic habits</li>
      <li>Power of Now</li>
    </ol>
  `,
  styles: ` ol {
    list-style-type: upper-roman;
  }`,
})
export class AppComponent {}
