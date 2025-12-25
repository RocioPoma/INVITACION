import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountdownService implements OnDestroy {
  private countdownSubject = new BehaviorSubject<any>({});
  countdown$ = this.countdownSubject.asObservable();
  private interval: any;

  constructor() {
    this.startCountdown();
  }

  private startCountdown() {
    const weddingDate = new Date('2026-01-25T14:00:00').getTime();
    
    this.updateCountdown(weddingDate);
    
    this.interval = setInterval(() => {
      this.updateCountdown(weddingDate);
    }, 1000);
  }

  private updateCountdown(weddingDate: number) {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    this.countdownSubject.next({ days, hours, minutes, seconds });
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}