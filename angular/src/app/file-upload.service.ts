import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private dbPath = '/uploads';

  constructor(private db: AngularFireDatabase) { }
}
