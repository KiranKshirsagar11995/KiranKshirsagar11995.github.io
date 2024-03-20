import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern('[0-9]+$')]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }


  get username() {
    return this.loginForm.get('username');
  }


  get password() {
    return this.loginForm.get('password');
  }
  // Getter for easy access to form fields

  onSubmit() {

    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      console.log('Form is invalid');
    }

    // Handle login logic here
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;

      // Perform authentication or other actions
    }
  }
}
