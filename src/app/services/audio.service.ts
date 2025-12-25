import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private audio: HTMLAudioElement;
  private isPlaying = false;

  constructor() {
    this.audio = new Audio();
    this.audio.src = 'assets/audio/ildivo_hasta_mi_final.mp3';
    this.audio.loop = true;
    this.audio.volume = 0.5;
  }

  play() {
    if (!this.isPlaying) {
      this.audio.play()
        .then(() => this.isPlaying = true)
        .catch(error => console.log('Audio playback failed:', error));
    }
  }

  pause() {
    this.audio.pause();
    this.isPlaying = false;
  }

  setVolume(volume: number) {
    this.audio.volume = volume;
  }
}