import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent {
  isOpen = false;
  isOpening = false;

  constructor(private router: Router) {}

  openInvitation() {
    if (this.isOpening) return;
    
    this.isOpening = true;
    this.isOpen = true;
    
    setTimeout(() => {
      this.router.navigate(['/invitacion']);
    }, 800);
  }
}