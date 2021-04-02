import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  emailid:any;
  password:any;
 

  constructor(private fb: FormBuilder) {}


  ngOnInit(): void {
    this.myForm = this.fb.group({
      emailid: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(3)]]
    })
  }
 
onSubmit(){
  alert('login succesful');
}

}