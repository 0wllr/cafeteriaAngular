import { Component } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cafeteriaAngular';

  logout(){
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }

  constructor (private bnIdle:BnNgIdleService,private Auth:AuthService, private router:Router, private Token:TokenService){

  }

  ngOnInit(): void {
    this.bnIdle.startWatching(300).subscribe((res) => {
      if (res) {
        console.log('session expired');
        this.logout();
      }
    });
  }
}
