import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  constructor(private HttpClient: HttpClient) {}

  getWindows(): Observable<any> {
    return this.HttpClient.get(
      `https://brandon-gstorage-backend-renderteam.onrender.com/folder/windows/files`
    );
  }

  getBathrooms(): Observable<any> {
    return this.HttpClient.get(
      `https://brandon-gstorage-backend-renderteam.onrender.com/folder/bathrooms/files`
    );
  }
}
