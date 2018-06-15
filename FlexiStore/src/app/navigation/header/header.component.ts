import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { ProductService } from '../../shared/product.service';
import { MatDialog } from '@angular/material';
import { CartComponent } from '../../cart/cart/cart.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth = false;
  authSubscription: Subscription;

  constructor(private authService: AuthService, public data: ProductService,public dialog: MatDialog) {}

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(CartComponent, {
      width: '450px'
    });
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

}
