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
    
    // Redirigir inmediatamente después de iniciar la animación
    setTimeout(() => {
      this.router.navigate(['/invitacion']);
    }, 800); // Reducción del tiempo para una redirección más rápida
  }
}
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-sobre',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './sobre.component.html',
//   styleUrls: ['./sobre.component.scss']
// })
// export class SobreComponent {
//   isOpen = false;

//   constructor(private router: Router) {}

//   openInvitation() {
//     this.isOpen = true;
//     setTimeout(() => {
//       this.router.navigate(['/invitacion']);
//     }, 1500);
//   }
// }