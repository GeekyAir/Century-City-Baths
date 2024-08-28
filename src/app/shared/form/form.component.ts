import { HttpClient } from '@angular/common/http';
import { Component, NgZone } from '@angular/core';
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
  formdata!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _GalleryService: GalleryService,
    private _messageService: MessageService,
    private zone: NgZone
  ) {
    this.formdata = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: [''],
      phoneNumber: ['', Validators.required],
      city: [''],
      street: [''],
      zipCode: [''],
      projectType: [''],
      projectDescription: [''],
    });
  }

  sendFormToZapier() {
    if (this.formdata.valid) {
      this._GalleryService.submitForm(this.formdata.value).subscribe(
        (response) => {
          console.log('Form submitted successfully:', response);
        },
        (error) => {
          console.error('Error sending form:', error);
          console.error('Detailed error:', error.message);
        }
      );
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
