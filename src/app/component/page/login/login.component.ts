import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToasterService} from '../../../toaster.service';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {Auth} from '../auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  username: string;
  password: string;
  list = {};
  constructor(  private toast: ToasterService,
                private formBuilder: FormBuilder,
                private service: AuthService,
                private router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(formValue: Auth) {
    this.username = formValue.username.toLowerCase();
    this.password = formValue.password.toLowerCase();
    if (this.form.valid) {
      this.service.checkLogin(this.username, this.password).subscribe(res => {
        this.list = res[0];
        if (this.list === undefined) {
          this.toast.Error('Lỗi dữ liệu', 'Username hoặc password bị sai !!!');
        } else {
          this.toast.Success('Chúc mừng', 'Đăng nhập thành công!');
          this.loginSuccess();
        }
      });
    } else if (this.form.invalid) {
      return this.toast.Error('Lỗi dữ liệu', 'Username hoặc password không được trống !!!');
    }

  }

  loginSuccess() {
    this.router.navigate(['/oder']);
  }

}
