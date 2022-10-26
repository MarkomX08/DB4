import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
  ) { }

  verificacion(): Observable<boolean>{
    console.log(localStorage.getItem('tokencito'));
    if(localStorage.getItem('tokencito')){
      return of(true);
    }else{
      return of(false);
    }  
  }

  login(){
    localStorage.setItem('tokencito','ese soy yo');
  }

  logout(){
    localStorage.clear();
  }
}
