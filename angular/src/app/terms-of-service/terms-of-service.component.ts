import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'terms-of-service',
    templateUrl: './terms-of-service.component.html',
    styleUrls: ['./terms-of-service.component.css']
})
export class TermsOfServiceComponent implements OnInit {

    constructor() { }

    inputHTML;
    rules;

    ngOnInit() {

        const numberOfMessageItems = 15;
        const translationPrefix = 'PAGES.TERMS_OF_SERVICE.RULE_';
        this.rules = Array.apply(null, Array(numberOfMessageItems)).map((item, index) => {
            const incrementedIndex = index + 1;
            let rulesObject = {};
            rulesObject['listIndex'] = '§' + incrementedIndex + ' ';
            rulesObject['title'] = translationPrefix + incrementedIndex + '.TITLE';
            rulesObject['content'] = translationPrefix + incrementedIndex + '.CONTENT';
            return rulesObject;
        });

    }


}
