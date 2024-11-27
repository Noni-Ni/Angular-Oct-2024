import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
 testPattern = "^[A-Z][a-z]+\\s[A-Z][a-z]+$"
 passPattern = `[A-Za-z0-9]+`
 passwordsMatch = true

  register(form: NgForm) {
    
    const password = form.value.password
    const rePassword = form.value.rePassword
    this.passwordsMatch = password === rePassword;
    console.log(this.passwordsMatch)
    if (form.invalid || !this.passwordsMatch) {
      
      console.error('Invalid Register Form!');
      return;
    }
    
    console.log(form.value)
    form.reset()
  }
}