import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user-service.service';
import { Router } from '@angular/router';
import { GlobalConstants } from '../../constant/global-constants';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm: any = FormGroup;
  password: boolean = true;
  responseMessage: any;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService) {}
    //private snackbarService: SnackbarService,

  ngOnInit(): void {
    this.loginForm= this.formBuilder.group({
      email:[null, [Validators.required, Validators.pattern(GlobalConstants.emailRegex)]],
      password:[null, [Validators.required]]
    })
  }

  handleSubmit() {
    var formData= this.loginForm.value;
    var data= {
      email: formData.email,
      password: formData.password
    }
  
    this.userService.login(data).subscribe((response:any) => {
      //this.dialogRef.close();
      localStorage.setItem('token', response.token);
      this.router.navigate(['/']);
    }, 
      (error) => {
        if (error.error?.message) this.responseMessage= error.error?.message;
        else
          this.responseMessage= GlobalConstants.genericError;

        //this.snackbarService.openSnackBar(this.responseMessage, GlobalConstants.error);
      })
  }

}