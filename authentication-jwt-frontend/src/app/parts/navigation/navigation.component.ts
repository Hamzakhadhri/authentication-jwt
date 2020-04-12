import {Component, OnDestroy, OnInit, Inject} from '@angular/core';
import { UserService } from "../../services/user.service";
import {Subscription} from "rxjs";
import {JwtResponse} from "../../response/JWtResponse";
import {Router} from "@angular/router";
import {Role} from "../../enums/role.enum";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy{

  currentUserSubscription: Subscription;
  name$;
  name: string;
  currentUser: JwtResponse;
  root = '/';
  Role = Role;

  constructor(private userService: UserService,
              private router: Router,
  ) {

  }


  ngOnInit() {
      const user = this.userService.currentUserValue
      this.name$ = this.userService.name$.subscribe(aName => this.name = aName);

      if(user) {
          this.name = user.name
      }

      this.currentUserSubscription = this.userService.currentUser.subscribe(user => {
          this.currentUser = user;
          if (!user || user.role == Role.Customer) {
              this.root = '/';
          } else {
              this.root = '/seller';
          }
      });
  }

  ngOnDestroy(): void {
      this.currentUserSubscription.unsubscribe();
      // this.name$.unsubscribe();
  }

  logout() {
      this.userService.logout();
      // this.router.navigate(['/login'], {queryParams: {logout: 'true'}} );
  }


}
