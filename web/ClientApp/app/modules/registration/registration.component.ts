import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;

    constructor(private _formBuilder: FormBuilder) { }

    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            companyNameCtrl: ['', Validators.required],
            addressCtrl: ['', Validators.required],
            phoneCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            firstNameCtrl: ['', Validators.required],
            lastNameCtrl: ['', Validators.required],
            emailCtrl: ['', Validators.required],
            passCtrl: ['', Validators.required],
            pass2Ctrl: ['', Validators.required],
            captchaCtrl: ['', Validators.required]
        });
    }

}
