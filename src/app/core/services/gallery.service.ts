import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  formData!: FormGroup;
  private endpoint = 'https://hooks.zapier.com/hooks/catch/17356497/3wds2yj/';

  constructor(private httpClient: HttpClient) {}

  getWindows(): Observable<any> {
    return this.httpClient.get(
      `https://brandon-gstorage-backend-renderteam.onrender.com/folder/windows/files`
    );
  }

  getBathrooms(): Observable<any> {
    return this.httpClient.get(
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

  submitForm(formData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'multipart/form-data' });

    return this.httpClient.post<any>(this.endpoint, JSON.stringify(formData), {
      headers,
    });
  }
}
