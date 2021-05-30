import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ModalService } from 'src/app/core/services/modal.service';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-store-registration',
  templateUrl: './store-registration.component.html',
  styleUrls: ['./store-registration.component.scss']
})
export class StoreRegistrationComponent implements OnInit {

  public form: FormGroup;
  public submitted = false;
  public validationMessages: any;

  constructor(
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private loader: LoaderService,
    private modalService: ModalService,
    private router: Router,
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.setInitialData();
  }

  public onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    // TO DO
    console.log('FORM SUBMITTED');
  }

  private buildForm(): void {
    // TO DO
    console.log('BUILD FORM');
  }

  private navigateToPage(route: string) {
    this.router.navigateByUrl(route);
  }

  private setInitialData(): void {
    // TO DO
    console.log('SET INITIAL DATA');

    this.setValidationMessages();
  }

  private setValidationMessages(): void {
    // TO DO
    console.log('SET VALIDATION MESSAGES');
  }
}
