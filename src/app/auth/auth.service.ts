import * as firebase from 'firebase';
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService
{
    constructor(private router : Router){

    }

    token : string;
    private isUserLoggedIn : boolean = false;
    public username;
    public wrongCredentialError : boolean = false;

    signinUser(email : string, password : string){
        if(email == 'admin@test.com' && password == 'admin') {
            this.setUserLoggedIn();
            this.wrongCredentialError = false;
            this.router.navigate(['todoList']);
        }
        else{
            this.wrongCredentialError = true;
        }
    }


    setUserLoggedIn() {
        this.isUserLoggedIn = true;
        this.username = 'admin';
    }

    isAuthenticated(){
        return this.isUserLoggedIn;
    }

    logOut(){
        this.isUserLoggedIn = false;
        this.router.navigate(['signin']);
    }
}