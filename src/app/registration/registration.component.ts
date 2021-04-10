import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormGroupDirective } from '@angular/forms';
// import { ConfirmedValidator } from './confirmed.validator';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  // touched=false;
  myForm: FormGroup;
  firstname: any;
  lastname: any;
  password: any;
  conpass: any;
  email:any;
  mobile:number;
  message = '';
  user:any={};

   @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;
  

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      lastname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      conpass: ['',[Validators.required,Validators.minLength(4)]],
      mobile: ['',[Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]]
    });
  }
  onSubmit(){
    if (this.password != this.conpass){
      this.message = "password not match";
    }else{
      this.message = "";
    this.user =Object.assign(this.user,this.myForm.value); 
this.addUser(this.user);
// console.log(JSON.stringify(this.password));

   alert("submitted");
    
    
    // this.myForm.markAsUntouched();
    // window.location.reload()
    }
  }
addUser(user){
let users =[];
  if(localStorage.getItem('Users')){
    users = JSON.parse(localStorage.getItem('Users'));
    users = [user, ...users];
  }else{
    users=[user];
  }
  localStorage.setItem('Users', JSON.stringify(users));
  this.formGroupDirective.resetForm();
}

valid(){
  console.log("check the confirm");
  if (this.password != this.conpass) {
    this.message = "password not match";
  } else{
this.message="";
  }
}

// buttonClick(){
//   this.form.onSubmit.emit();
// }
}

