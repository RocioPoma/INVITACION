import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PhotoGalleryComponent } from '../photo-gallery/photo-gallery.component';

@Component({
  selector: 'app-invitacion',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PhotoGalleryComponent
  ],
  templateUrl: './invitacion.component.html',
  styleUrls: ['./invitacion.component.scss']
})
export class InvitacionComponent implements OnInit, OnDestroy {
  countdown: any = {
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  };
  
  private countdownInterval: any;
  private weddingDate: Date;

  constructor() {
    // Fecha de la boda: 25 de Enero 2026, 14:00
    this.weddingDate = new Date('2026-01-25T14:00:00');
  }

  ngOnInit() {
    this.updateCountdown();
    this.countdownInterval = setInterval(() => {
      this.updateCountdown();
    }, 1000);

    // Agregar Font Awesome si no está presente
    this.loadFontAwesome();
  }

  ngOnDestroy() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }

  private updateCountdown() {
    const now = new Date();
    const diff = this.weddingDate.getTime() - now.getTime();

    if (diff <= 0) {
      this.countdown = {
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00'
      };
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    this.countdown = {
      days: days.toString().padStart(2, '0'),
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0')
    };
  }

  submitRSVP() {
    // Redirección directa a Google Forms
    const googleFormUrl = `https://docs.google.com/forms/d/e/1FAIpQLSfHSZUi4CCL2hIhe5Q_DFBnh-w6ae7GwEnd8TBGuqKSB9KeEw/viewform?usp=publish-editor`;
    window.open(googleFormUrl, '_blank');
  }

  openLocation() {
    // Redirección a Google Maps
    const mapsUrl = 'https://maps.google.com/?q=Ensueño+Eventos,+Cochabamba,+Bolivia';
    window.open(mapsUrl, '_blank');
  }

  private loadFontAwesome() {
    // Verificar si Font Awesome ya está cargado
    if (!document.querySelector('link[href*="font-awesome"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
      document.head.appendChild(link);
    }
  }
}