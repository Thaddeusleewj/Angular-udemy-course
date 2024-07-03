import { Component, Input, Output } from '@angular/core';

// Importing components


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input()

  onSelectUser() {}
}
