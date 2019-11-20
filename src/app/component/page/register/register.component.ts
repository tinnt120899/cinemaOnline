import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {WizardComponent} from 'angular-archwizard';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // validation form
  validationForm: FormGroup;
  profileValidationForm: FormGroup;

  submit: boolean;
  submitForm: boolean;
  @ViewChild('wizardForm', { static: false }) wizard: WizardComponent;
  constructor( public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.validationForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['', Validators.required],
    });

    this.profileValidationForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
    });

    this.submit = false;
    this.submitForm = false;
  }
  get form() {
    return this.validationForm.controls;
  }

  formSubmit() {
    if (this.validationForm.valid) {
     this.wizard.navigation.goToNextStep();
    }
    this.submit = true;
  }

  profileFormSubmit() {
    if (this.profileValidationForm.valid) {
      this.wizard.navigation.goToNextStep();
    }
    this.submitForm = true;
  }

  get profileForm() {
    return this.profileValidationForm.controls;
  }

}
