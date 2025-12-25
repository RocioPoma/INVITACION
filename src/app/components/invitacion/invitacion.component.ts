import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CountdownService } from '../../services/countdown.service';
import { AudioService } from '../../services/audio.service';
import { PhotoGalleryComponent } from '../photo-gallery/photo-gallery.component';

@Component({
  selector: 'app-invitacion',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    PhotoGalleryComponent
  ],
  templateUrl: './invitacion.component.html',
  styleUrls: ['./invitacion.component.scss']
})
export class InvitacionComponent implements OnInit {
  countdown: any = {};
  showForm = false;
  guestName = '';
  numberOfGuests = 1;
  attendance = 'si';

  constructor(
    private countdownService: CountdownService,
    private audioService: AudioService
  ) {}

  ngOnInit() {
    this.countdownService.countdown$.subscribe(data => {
      this.countdown = data;
    });

    // Reproducir música automáticamente
    setTimeout(() => {
      this.audioService.play();
    }, 1000);
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  submitRSVP() {
    const formData = {
      nombre: this.guestName,
      invitados: this.numberOfGuests,
      asistencia: this.attendance
    };

    // Redirigir a Google Forms con los datos
    const googleFormUrl = `https://docs.google.com/forms/d/e/1FAIpQLSfHSZUi4CCL2hIhe5Q_DFBnh-w6ae7GwEnd8TBGuqKSB9KeEw/viewform?usp=publish-editor`;
    window.open(googleFormUrl, '_blank');
  }

  toggleMusic() {
    // Implementar toggle de música si es necesario
  }
}