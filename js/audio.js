/**
 * Web Audio API Ambient Movement Soundscape Generator
 * Creates an organic, meditative rhythmic background texture and UI interaction sounds
 */

class AmbientMovementAudio {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.masterGain = null;
    this.oscillators = [];
    this.intervalId = null;
    this.initElements();
  }

  initElements() {
    const toggles = document.querySelectorAll('.ambient-toggle');
    toggles.forEach(toggle => {
      toggle.addEventListener('click', () => this.toggle());
    });
  }

  initAudio() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AudioContext();

    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);
  }

  toggle() {
    if (!this.ctx) {
      this.initAudio();
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (this.isPlaying) {
      this.stop();
    } else {
      this.start();
    }
  }

  start() {
    this.isPlaying = true;
    this.updateUI(true);

    const now = this.ctx.currentTime;
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setValueAtTime(0, now);
    this.masterGain.gain.linearRampToValueAtTime(0.08, now + 2);

    // Warm Harmonic Drone (432Hz tuning / D minor meditative chord)
    const baseFreqs = [144, 216, 288, 432];
    this.oscillators = baseFreqs.map((freq, index) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const panner = this.ctx.createStereoPanner ? this.ctx.createStereoPanner() : null;

      osc.type = index % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.02 / (index + 1), now);

      if (panner) {
        panner.pan.setValueAtTime((index % 2 === 0 ? -0.4 : 0.4), now);
        osc.connect(gain);
        gain.connect(panner);
        panner.connect(this.masterGain);
      } else {
        osc.connect(gain);
        gain.connect(this.masterGain);
      }

      osc.start(now);
      return { osc, gain };
    });

    // Gentle rhythmic pulse every 2.4s (choreographic breath cycle)
    this.intervalId = setInterval(() => {
      if (!this.isPlaying || !this.ctx) return;
      this.triggerRhythmicPulse();
    }, 2400);
  }

  triggerRhythmicPulse() {
    const now = this.ctx.currentTime;
    const pulseOsc = this.ctx.createOscillator();
    const pulseGain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    pulseOsc.type = 'sine';
    pulseOsc.frequency.setValueAtTime(72, now);
    pulseOsc.frequency.exponentialRampToValueAtTime(36, now + 0.8);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(140, now);

    pulseGain.gain.setValueAtTime(0.06, now);
    pulseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.9);

    pulseOsc.connect(filter);
    filter.connect(pulseGain);
    pulseGain.connect(this.masterGain);

    pulseOsc.start(now);
    pulseOsc.stop(now + 1);
  }

  stop() {
    this.isPlaying = false;
    this.updateUI(false);

    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }

    if (this.ctx && this.masterGain) {
      const now = this.ctx.currentTime;
      this.masterGain.gain.linearRampToValueAtTime(0, now + 0.8);
      setTimeout(() => {
        this.oscillators.forEach(item => {
          try { item.osc.stop(); } catch(e) {}
        });
        this.oscillators = [];
      }, 850);
    }
  }

  updateUI(playing) {
    const toggles = document.querySelectorAll('.ambient-toggle');
    const label = document.getElementById('ambient-label');
    toggles.forEach(t => {
      if (playing) {
        t.classList.add('playing');
        if (label) label.textContent = 'Movement Sound: On';
      } else {
        t.classList.remove('playing');
        if (label) label.textContent = 'Movement Sound: Off';
      }
    });
  }
}

window.ambientAudio = new AmbientMovementAudio();
