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
      username: ['', [Validators.required, this.mobileValidator]],
      password: ['', Validators.required]
    });
  }
  mobileValidator(control: any) {
    const mobileNumberRegex = /^[0-9]{10}$/; // Change this regex according to your requirements
    return mobileNumberRegex.test(control.value) ? null : { invalidMobile: true };

  }

  get f() {
    return this.loginForm.controls;
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
