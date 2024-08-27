import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  form!: FormGroup;

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
        script.onerror = () =>
          reject(new Error(`Failed to load script ${src}`));
        document.body.appendChild(script);
      } else {
        resolve();
      }
    });
  }
  private zapierUrl: string =
    'https://hooks.zapier.com/hooks/catch/17356497/3wds2yj/';

  // sendFormToZapier() {
  //   return this.HttpClient.post(this.zapierUrl, this.form);
  // }

  sendFormToZapier(formData: any) {
    return this.HttpClient.post(this.zapierUrl, formData);
  }
}
