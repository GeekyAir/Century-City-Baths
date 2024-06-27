import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GalleryService } from '../../core/services/gallery.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  form: FormGroup;
  zapierUrl: string = 'https://hooks.zapier.com/hooks/catch/17356497/2blub1q/';

  constructor(private fb: FormBuilder, private httpClient: HttpClient, private _GalleryService: GalleryService) {
    this.form = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl(''),
      phoneNumber: new FormControl('', Validators.required),
      city: new FormControl(''),
      street: new FormControl(''),
      zipCode: new FormControl(''),
      projectType: new FormControl(''),
      projectDescription: new FormControl('')
    });

  }
  sendFormToZapier() {
    this._GalleryService.sendFormToZapier().subscribe({
      next: (res: any) => {

        console.log('Data sent to Zapier:', res);
        this.form.reset();

      },
      error: (err: any) => {
        console.error('Error sending data to Zapier:', err);
      },
      complete: () => {
        console.log('Data sent to Zapier request completed');
      }
    });
  }

  // onSubmit() {
  //   if (this.form.valid) {
  //     this.sendFormToZapier(this.form.value);
  //   }
  // }

}
