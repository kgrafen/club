import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'terms-of-service',
  templateUrl: './terms-of-service.component.html',
  styleUrls: ['./terms-of-service.component.css']
})
export class TermsOfServiceComponent implements OnInit {

  constructor(private http: HttpClient) { }

  inputHTML;

  ngOnInit() {
    this.readTosFile();
  }

  readTosFile() {
    this.http.get('./assets/files/Retningslinjer.txt', { responseType: 'text' }).subscribe(data => {
      //this.inputHTML = data;
      this.inputHTML = this.inputTextToHTML(data);
    });
  }

  inputTextToHTML(inputDoc: string): string {
    let outputHTML: string = "<h1>";

		let temp: string = inputDoc.substring (0, inputDoc.indexOf ("\n"));
		outputHTML += temp + "</h1>" + "<br>";
    inputDoc = inputDoc.replace(inputDoc.substring(0, temp.length + "\n".length), "");


		let count: number = 0;

		while (inputDoc.indexOf("\n") >= 0 && count < 100) {
			temp = inputDoc.substring (0, inputDoc.indexOf ("\n"));

			if (temp.length <= "\n".length) {
				outputHTML += "<p></p>" + "<br>";

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
					outputHTML += "<h2>" + temp + "</h2>" + "<br>";
				} else {
					outputHTML += "<p>" + temp + "</p>" + "<br>";
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
