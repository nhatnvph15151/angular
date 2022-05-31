import { UserType } from '../../../user';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.serice';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signup: UserType = {
    email: "",
    password: ""
  }
  constructor(private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.userService.signup(this.signup).subscribe(data => {
      console.log("dsadas")
    })
    console.log(this.signup)
  }
}
