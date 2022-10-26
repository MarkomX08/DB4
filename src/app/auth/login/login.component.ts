import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Formulario: FormGroup = this.fb.group({
    email:[,[Validators.required, Validators.minLength(3)]],
    password:[,[Validators.required, Validators.minLength(1)]]
  })
  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { 
  }

  ngOnInit(): void {
  }

  campoEsValido(campo: string) {
    return this.Formulario.controls[campo].errors && this.Formulario.controls[campo].touched;
  }

}
