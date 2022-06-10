import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/models/user.model';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Input() userInput?: User;

    @Output() loginEvent = new EventEmitter<User>();

    /**
     * Get the display name of the logged in user. First name abbreviated (e.g. John Doe -> J. Doe).
     * @returns
     */
    public getDisplayName(): string {
        let name: string = '';

        if (this.userInput) {
            name = this.userInput.firstName[0].toUpperCase();
            name += '. ';
            name += this.userInput.lastName;
        }

        return name;
    }

    public login() {
        this.loginEvent.emit({
            firstName: 'John',
            lastName: 'Doe'
        });
    }

}
