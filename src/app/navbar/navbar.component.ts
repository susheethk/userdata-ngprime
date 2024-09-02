import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule, ButtonModule, DropdownModule, InputTextModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] 
})
export class NavbarComponent {
  languages: any[];
  selectedLanguage: string;

  userOptions: any[];
  selectedUser: string;

  constructor() {
    this.languages = [
      { label: 'English', value: 'en' },
      { label: 'French', value: 'fr' },
      { label: 'Hindi', value: 'hi' },
      { label: 'Tulu', value: 'tl' }
    ];
    this.selectedLanguage = 'en';

    this.userOptions = [
      { label: 'John Doe', value: 'john' },
      { label: 'Sachin', value: 'sachin' },
      { label: 'Guru', value: 'guru' }
    ];
    this.selectedUser = 'john';
  }

  // This method can be used to perform actions when the language is changed
  onLanguageChange(event: any) {
    this.selectedLanguage = event.value;
    // Implement logic to handle language change, e.g., update translations
    console.log('Language changed to:', this.selectedLanguage);
  }
}
