import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registerForm: FormGroup;
  constructor(private router:Router) {
    this.registerForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      gender: new FormControl('male'),

    });
  }

  onSubmit() {
    if(this.registerForm.valid) {
      console.log(this.getValue());
      this.router.navigate(['/users'])
    }
  }
  getValue() {
    return this.registerForm.value;
  }
}