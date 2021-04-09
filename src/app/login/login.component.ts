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
    sessionStorage.setItem("username","manjunath@gmail.com")
    sessionStorage.setItem("userpw","manju@3");
    var user1=sessionStorage.getItem("username");
    var pw1=sessionStorage.getItem("userpw");
    var user=this.emailid;
    var pw=this.password;
    if((user1==user) && (pw1==pw)){
        //var landingUrl = "/hero";
       // window.location.href = landingUrl;
        alert("log in Successful");
      
    }
    else
    {
    alert('Login Unsuccesful');
    }
}

}