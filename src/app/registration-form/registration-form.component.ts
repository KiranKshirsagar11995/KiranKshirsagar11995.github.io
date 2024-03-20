import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  registrationForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createLoginForm(); // Initialize the form when the component is initialized
  }

  createLoginForm() {
    this.registrationForm = this.fb.group({
      // Define all FormControls with their validators
      fname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      mothername: ['', [Validators.required]],
      fathername: ['', [Validators.required]],
      statename: ['', [Validators.required]],
      cityname: ['', [Validators.required]],
      mobileNo: ['', [Validators.required, Validators.minLength(8)]],
      address: ['', [Validators.required]],
      // gender: ['', [Validators.required]], // Use a single FormControl for gender
      dob: ['', [Validators.required]],
      pincode: ['', [Validators.required, Validators.minLength(6)]],
      course: ['', [Validators.required]],
      school: ['', [Validators.required]],
      marks: ['', [Validators.required]],
      year: ['', [Validators.required]],
      schoolTc: ['', [Validators.required]],
      adharcard: ['', [Validators.required, Validators.minLength(16)]],
      electioncard: ['', [Validators.required]],
      passport: ['', [Validators.required]],
    });
  }

  currentStep = 1;
  selectedFile: File | null = null;
  formData: any = {};

  nextStep() {
    this.currentStep++;
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  submitForm() {
    console.log('Form submitted with data:', this.formData);
    // Add logic to send data to backend or perform other actions
  }

  onFileSelected(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.selectedFile = fileList[0];
      // Add any additional logic to handle the selected file
    }
  }

  onSubmit() {

    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
    } else {
      console.log('Form is invalid');
    }

    // Handle login logic here
    if (this.registrationForm.valid) {
      const username = this.registrationForm.value.username;
      const password = this.registrationForm.value.password;

      // Perform authentication or other actions
    }
  }
}
