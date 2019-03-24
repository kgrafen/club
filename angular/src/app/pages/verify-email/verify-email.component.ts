import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-verify-email',
    templateUrl: './verify-email.component.html',
    styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

    user;

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() {
        this.authService.afAuth.auth.onAuthStateChanged(user => {
            if (user !== null) {
                this.user = user;
                if (user.emailVerified) {
                    this.router.navigate(['/events']);
                }
            } else {
                this.router.navigate(['/']);
            }
        });
    }
}
