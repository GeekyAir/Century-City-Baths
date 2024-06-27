import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  constructor(private HttpClient: HttpClient) { }

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

  loadScript(src: string, id: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const existingScript = document.getElementById(id);

      if (!existingScript) {
        const script = document.createElement('script');
        script.src = src;
        script.id = id;
        script.async = true;
        script.defer = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script ${src}`));
        document.body.appendChild(script);
      } else {
        resolve();
      }
    });
  }
}
