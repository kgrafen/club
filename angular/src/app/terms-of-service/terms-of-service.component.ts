import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';

@Component({
  selector: 'terms-of-service',
  templateUrl: './terms-of-service.component.html',
  styleUrls: ['./terms-of-service.component.css']
})
export class TermsOfServiceComponent implements OnInit {

	displayNavbar = false;

  constructor(private http: HttpClient, private authService: AuthService) { }

  inputHTML;

  ngOnInit() {
		this.readTosFile();
		this.authService.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.displayNavbar = true;
      }
    });
  }

  readTosFile() {
		console.log("before");

		let observer = this.http.get('./assets/files/Retningslinjer.txt', {responseType: 'text'}).subscribe(data => {
			console.log("after");
			this.inputHTML = this.inputTextToHTML(data);
			observer.unsubscribe();
		});

    /*this.http.get('./assets/files/Retningslinjer.txt', { responseType: 'text' }).subscribe(data => {

			console.log("Hallo?");
			//this.inputHTML = data;
			//this.inputHTML = this.inputTextToHTML(data);
    }).unsubscribe(); */
  }

  inputTextToHTML(inputDoc: string): string {
    let outputHTML: string = "<h2>";

		let temp: string = inputDoc.substring (0, inputDoc.indexOf ("\n"));
		outputHTML += temp + "</h2>" + "<br>";
    inputDoc = inputDoc.replace(inputDoc.substring(0, temp.length + "\n".length), "");


		let count: number = 0;

		while (inputDoc.indexOf("\n") >= 0 && count < 100) {
			temp = inputDoc.substring (0, inputDoc.indexOf ("\n"));

			if (temp.length <= "\n".length) {
				outputHTML += "<p></p>";

				if (temp.length == 0) {
					if (inputDoc.length > 0) {
            inputDoc = inputDoc.replace(inputDoc.substring(0, 1), "");
					} else {
						inputDoc = "";
					}
				} else {
					if (inputDoc.length > 0) {
            inputDoc = inputDoc.replace(inputDoc.substring(0, temp.length), "");
					} else {
						inputDoc = "";
					}
				}
			} else {
				//Search instead of contains
				if (temp.includes ("§")) {
					outputHTML += "<h3>" + temp + "</h3>" + "<br>";
				} else {
					outputHTML += "<p>" + temp + "</p>";
				}

				if (inputDoc.length > 0) {
          inputDoc = inputDoc.replace(inputDoc.substring(0, temp.length + "\n".length), "");
				} else {
					inputDoc = "";
				}
			}

			count++;
		}

		return outputHTML;
  }

}
