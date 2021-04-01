import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  title = 'Registration Page';

  myForm: FormGroup;


  username: any;
  email:any;
  password:any;
  mobileno:any;
  conpassword:any; 
  message='';
  // message='';
  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      username:['',[Validators.required,Validators.minLength(3),Validators.maxLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      mobileno: ['',[Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{12}$')]],
      conpassword: ['',[Validators.required, Validators.minLength(3)]]
    });
  }
  onSubmit() {
    if(this.password!=this.conpassword){
      this.message="password not match";
      setTimeout(()=>{
        this.message="";
      },3000)
    } else
alert('Submitted');
  }
}
  // constructor() { }

  // ngOnInit(): void {
  // }


