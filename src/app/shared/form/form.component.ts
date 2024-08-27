import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { GalleryService } from '../../core/services/gallery.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  zapierUrl: string = 'https://hooks.zapier.com/hooks/catch/17356497/3wds2yj/';
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _GalleryService: GalleryService,
    private _messageService: MessageService
  ) {
    this.form = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      zipCode: new FormControl('', Validators.required),
      projectType: new FormControl('', Validators.required),
      projectDescription: new FormControl('', Validators.required),
    });
  }

  sendFormToZapier() {
    if (this.form.valid) {
      this._GalleryService.sendFormToZapier(this.form.value).subscribe({
        next: (res: any) => {
          this.showSuccess();
          console.log('Data sent to Zapier:', res);
          this.form.reset();
        },
        error: (err: any) => {
          console.error('Error sending data to Zapier:', err);
        },
        complete: () => {
          console.log('Data sent to Zapier request completed');
        },
      });
    }
  }

  showSuccess() {
    this._messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Thank you! Your message has been sent successfully.',
    });
  }
}
