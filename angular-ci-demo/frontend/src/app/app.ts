import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private api = inject(ApiService);

  message = '';
  service = '';
  error = '';
  loading = false;

  callBackend() {
    this.loading = true;
    this.error = '';

    this.api.getHello().subscribe({
      next: (response: any) => {
        this.message = response.message;
        this.service = response.service;
        this.loading = false;
      },
      error: () => {
        this.error = 'Backend connection failed. Check port 3000.';
        this.loading = false;
      }
    });
  }
}
