import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';



@Injectable({
  providedIn: 'root'
})
export class TranslateHelperService {

  constructor(
    private translateService: TranslateService,

  ) { }

  translateFirebaseErrorMessage(errorCode: string) {
        return this.translateService.get('FIREBASE.ERRORS.' + errorCode);
}
}
