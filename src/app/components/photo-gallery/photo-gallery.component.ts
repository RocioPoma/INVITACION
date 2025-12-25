import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photo-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="gallery-container">
      <div class="gallery-grid">
        <div *ngFor="let photo of photos; let i = index" 
             class="photo-item"
             (click)="selectPhoto(i)">
          <img [src]="photo.src" [alt]="photo.alt">
          <div class="photo-overlay">{{photo.title}}</div>
        </div>
      </div>
      
      <div *ngIf="selectedPhoto !== null" class="lightbox" (click)="closeLightbox()">
        <div class="lightbox-content">
          <img [src]="photos[selectedPhoto].src" [alt]="photos[selectedPhoto].alt">
          <div class="photo-info">{{photos[selectedPhoto].description}}</div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
      padding: 1rem;
    }
    
    .photo-item {
      position: relative;
      overflow: hidden;
      border-radius: 10px;
      cursor: pointer;
      height: 300px;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
      }
      
      &:hover img {
        transform: scale(1.05);
      }
      
      .photo-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(85, 107, 47, 0.8);
        color: white;
        padding: 1rem;
        text-align: center;
        transform: translateY(100%);
        transition: transform 0.3s ease;
      }
      
      &:hover .photo-overlay {
        transform: translateY(0);
      }
    }
    
    .lightbox {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      
      .lightbox-content {
        max-width: 90%;
        max-height: 90%;
        
        img {
          max-width: 100%;
          max-height: 70vh;
          border-radius: 10px;
        }
        
        .photo-info {
          color: white;
          text-align: center;
          margin-top: 1rem;
          padding: 1rem;
          background: rgba(85, 107, 47, 0.8);
          border-radius: 5px;
        }
      }
    }
  `]
})
export class PhotoGalleryComponent {
  photos = [
    {
      src: 'assets/images/couple1.jpg',
      alt: 'Sain y Rocío 1',
      title: 'Nuestro Amor',
      description: 'Un momento especial juntos'
    },
    {
      src: 'assets/images/couple2.jpg',
      alt: 'Sain y Rocío 2',
      title: 'Risas Compartidas',
      description: 'Disfrutando cada instante'
    },
    {
      src: 'assets/images/couple3.jpg',
      alt: 'Sain y Rocío 3',
      title: 'Aventuras',
      description: 'Explorando el mundo juntos'
    },
    {
      src: 'assets/images/couple4.jpg',
      alt: 'Sain y Rocío 4',
      title: 'Promesa Eterna',
      description: 'Nuestro compromiso de amor'
    }
  ];
  
  selectedPhoto: number | null = null;
  
  selectPhoto(index: number) {
    this.selectedPhoto = index;
  }
  
  closeLightbox() {
    this.selectedPhoto = null;
  }
}