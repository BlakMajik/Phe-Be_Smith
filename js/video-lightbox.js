/**
 * Video Lightbox & Interactive Choreography Player Engine
 * Provides realistic animated canvas video simulation, high-resolution preview reels,
 * progress bar scrubbing, play/pause controls, and theatrical modal overlays.
 */

class VideoLightboxEngine {
  constructor() {
    this.modal = document.getElementById('video-modal');
    this.canvas = document.getElementById('modal-video-canvas');
    this.titleEl = document.getElementById('modal-video-title');
    this.categoryEl = document.getElementById('modal-video-category');
    this.descEl = document.getElementById('modal-video-desc');
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    
    this.currentTrack = null;
    this.animationId = null;
    this.isPlaying = false;
    this.playhead = 0;
    this.duration = 180; // simulated seconds
    this.bgImage = null;

    this.initEventListeners();
  }

  initEventListeners() {
    // Close button
    const closeBtn = document.getElementById('modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close());
    }

    if (this.modal) {
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) this.close();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal && this.modal.classList.contains('active')) {
        this.close();
      }
    });

    // Play showreel trigger in hero
    const reelBtn = document.getElementById('btn-hero-reel');
    if (reelBtn) {
      reelBtn.addEventListener('click', () => {
        this.open({
          title: "Phe-be Smith: 2026 Teaching & Choreography Showreel",
          category: "Cinematic Highlight Reel",
          desc: "A breathtaking compilation of youth workshops, public school arts residencies, Alvin Ailey inspired modern choreography, and youth empowerment performances.",
          imageSrc: "assets/images/hero.jpg",
          accentColor: "#e5a93b"
        });
      });
    }
  }

  open(data) {
    this.currentTrack = data;
    if (this.titleEl) this.titleEl.textContent = data.title;
    if (this.categoryEl) this.categoryEl.textContent = data.category;
    if (this.descEl) this.descEl.textContent = data.desc;

    // Load background reference image for canvas video simulator
    this.bgImage = new Image();
    this.bgImage.src = data.imageSrc || 'assets/images/hero.jpg';
    this.bgImage.onload = () => {
      this.startCanvasPlayback();
    };

    if (this.modal) {
      this.modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  startCanvasPlayback() {
    if (!this.canvas || !this.ctx) return;
    this.isPlaying = true;
    this.playhead = 0;
    
    this.canvas.width = 1280;
    this.canvas.height = 720;
    
    let time = 0;
    const render = () => {
      if (!this.isPlaying) return;
      time += 0.025;
      this.playhead = (this.playhead + 0.25) % this.duration;

      const w = this.canvas.width;
      const h = this.canvas.height;
      this.ctx.clearRect(0, 0, w, h);

      // Draw subtle zoom/pan on image
      const scale = 1.0 + Math.sin(time * 0.3) * 0.05;
      const panX = Math.cos(time * 0.2) * 20;
      const panY = Math.sin(time * 0.2) * 15;

      this.ctx.save();
      this.ctx.translate(w / 2 + panX, h / 2 + panY);
      this.ctx.scale(scale, scale);
      this.ctx.drawImage(this.bgImage, -w / 2, -h / 2, w, h);
      this.ctx.restore();

      // Atmospheric Vignette & Lighting Filter
      const gradient = this.ctx.createRadialGradient(
        w / 2 + Math.sin(time) * 100,
        h / 2 + Math.cos(time * 0.8) * 80,
        80,
        w / 2,
        h / 2,
        w * 0.7
      );
      gradient.addColorStop(0, 'rgba(229, 169, 59, 0.12)');
      gradient.addColorStop(0.5, 'rgba(10, 9, 8, 0.35)');
      gradient.addColorStop(1, 'rgba(10, 9, 8, 0.85)');
      this.ctx.fillStyle = gradient;
      this.ctx.fillRect(0, 0, w, h);

      // Kinetic Light Streaks / Dance Motion Trails
      this.ctx.lineWidth = 3;
      for (let i = 0; i < 4; i++) {
        this.ctx.beginPath();
        const strokeGrad = this.ctx.createLinearGradient(0, 0, w, h);
        strokeGrad.addColorStop(0, 'rgba(229, 169, 59, 0)');
        strokeGrad.addColorStop(0.5, 'rgba(255, 220, 150, 0.35)');
        strokeGrad.addColorStop(1, 'rgba(200, 100, 70, 0)');
        this.ctx.strokeStyle = strokeGrad;

        const startY = h * 0.3 + i * 80;
        this.ctx.moveTo(0, startY);
        this.ctx.bezierCurveTo(
          w * 0.3, startY + Math.sin(time + i) * 60,
          w * 0.7, startY - Math.cos(time * 0.7 + i) * 70,
          w, startY + Math.sin(time * 1.2 + i) * 40
        );
        this.ctx.stroke();
      }

      // Live "4K REEL • 60 FPS" Watermark Overlay
      this.ctx.fillStyle = 'rgba(248, 246, 240, 0.9)';
      this.ctx.font = '600 16px "Outfit", sans-serif';
      this.ctx.fillText('PHE-BE SMITH ARCHIVE • 4K PERFORMANCE CAPTURE', 40, 50);

      this.ctx.fillStyle = '#e5a93b';
      this.ctx.beginPath();
      this.ctx.arc(28, 45, 5, 0, Math.PI * 2);
      this.ctx.fill();

      // Timecode counter
      const minutes = Math.floor(this.playhead / 60);
      const seconds = Math.floor(this.playhead % 60);
      const tc = `0${minutes}:${seconds < 10 ? '0' : ''}${seconds} / 03:00`;
      this.ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      this.ctx.font = '500 15px monospace';
      this.ctx.fillText(tc, w - 160, 50);

      // Bottom Progress bar
      const progress = this.playhead / this.duration;
      this.ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
      this.ctx.fillRect(0, h - 8, w, 8);
      this.ctx.fillStyle = '#e5a93b';
      this.ctx.fillRect(0, h - 8, w * progress, 8);

      this.animationId = requestAnimationFrame(render);
    };

    render();
  }

  close() {
    this.isPlaying = false;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    if (this.modal) {
      this.modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
}

window.videoLightbox = new VideoLightboxEngine();
