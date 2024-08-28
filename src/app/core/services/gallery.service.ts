// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { FormGroup } from '@angular/forms';
// import { from, Observable, Observer } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class GalleryService {
//   databody!: FormGroup;

//   private zapierUrl = 'https://hooks.zapier.com/hooks/catch/17356497/3wds2yj/';

//   constructor(private HttpClient: HttpClient) {}

//   getWindows(): Observable<any> {
//     return this.HttpClient.get(
//       `https://brandon-gstorage-backend-renderteam.onrender.com/folder/windows/files`
//     );
//   }

//   getBathrooms(): Observable<any> {
//     return this.HttpClient.get(
//       `https://brandon-gstorage-backend-renderteam.onrender.com/folder/bathrooms/files`
//     );
//   }

//   loadScript(src: string, id: string): Promise<void> {
//     return new Promise((resolve, reject) => {
//       const existingScript = document.getElementById(id);

//       if (!existingScript) {
//         const script = document.createElement('script');
//         script.src = src;
//         script.id = id;
//         script.async = true;
//         script.defer = true;
//         script.onload = () => resolve();
//         script.onerror = () =>
//           reject(new Error(`Failed to load script ${src}`));
//         document.body.appendChild(script);
//       } else {
//         resolve();
//       }
//     });
//   }

//   sendFormToZapier(): Observable<any> {
//     let body = {
//       firstName: this.databody.controls['firstName'].value,
//       lastName: this.databody.controls['lastName'].value,
//       email: this.databody.controls['email'].value,
//       phoneNumber: this.databody.controls['phoneNumber'].value,
//       city: this.databody.controls['city'].value,
//       street: this.databody.controls['street'].value,
//       zipCode: this.databody.controls['zipCode'].value,
//       projectType: this.databody.controls['projectType'].value,
//       projectDescription: this.databody.controls['projectDescription'].value,
//     };
//     return this.HttpClient.post(this.zapierUrl,body);
//   }
// }

import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  formData!: FormGroup;
  private endpoint =
    'https://script.google.com/macros/s/AKfycbwacJkxP8jGP0tPSm-IH_z1KU9RYx7N9_7SBwe2GtOAXyvabz8tFb8wh2vDd9I2y6KS/exec';

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
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(this.endpoint, formData);
  }
}
