/**
 * Interactive Curriculum & Program Deep-Dive Modal Engine
 * Provides detailed breakdowns of each discipline: Age targets, STEM connections,
 * Social-Emotional Learning (SEL) goals, class structure, and student outcomes.
 */

const PROGRAM_DATA = {
  "early-childhood": {
    title: "Early Childhood Dance & Creative Movement",
    age: "Ages 3 – 5 (Preschool & Kindergarten)",
    image: "assets/images/earlychildhood.jpg",
    tagline: "Cultivating Joy, Spatial Imagination & Motor Foundations",
    overview: "A whimsical, scientifically grounded introduction to body awareness, musicality, and spatial navigation. Through sensory props (silk scarves, rhythm instruments, story prompts), tiny movers develop gross motor control, emotional expression, and social turn-taking in a loving, vibrant environment.",
    stemFocus: "Spatial geometry, bilateral coordination, rhythm-to-movement pattern recognition.",
    selGoals: "Self-regulation, listening discipline, joyful self-expression, empathetic group sharing.",
    sampleUnits: [
      "Shape & Level Exploration (High, Low, Curved, Angular)",
      "Animal Metaphors & Dynamic Weight Shifts",
      "Rhythm Games with Percussion Clapping",
      "Creative Storybook Dance Compositions"
    ]
  },
  "hiphop-jazz": {
    title: "Hip-Hop & Street Jazz Foundations",
    age: "Ages 6 – 18 & Adult Masterclasses",
    image: "assets/images/hiphop.jpg",
    tagline: "Kinetic Grooves, Poly-Rhythmic Precision & Cultural Authenticity",
    overview: "Rooted in African-American vernacular movement traditions, this high-energy program teaches groove, bounce, isolations, breaking basics, popping/locking footwork, and street jazz theatricality. Students learn historical cultural lineages while finding their unique swagger and freestyle voice.",
    stemFocus: "Kinematic velocity, center of mass transitions, polyrhythmic time division.",
    selGoals: "Audacious self-confidence, team cypher support, resilience through intricate drills.",
    sampleUnits: [
      "Foundational Grooves: Bounce, Rock, Wave & Isolations",
      "Syncopated Rhythmics & Street Jazz Floorwork",
      "Cypher Circles & Freestyling Strategy",
      "Ensemble Staging & Dynamic Formation Switching"
    ]
  },
  "modern-contemporary": {
    title: "Modern & Contemporary Dance Technique",
    age: "Ages 8 – Pre-Professional",
    image: "assets/images/modern.jpg",
    tagline: "Horton Fortifications, Graham Contractions & Theatrical Storytelling",
    overview: "Drawing heavily on Alvin Ailey, Lester Horton, and Martha Graham traditions, this discipline emphasizes flat backs, lateral T's, pelvic contractions, floor suspensions, and soaring leaps. Dancers learn to channel vulnerability, historical memory, and emotional depth through sculptural movement.",
    stemFocus: "Angular momentum in turns, gravitational resistance, kinetic energy storage.",
    selGoals: "Emotional catharsis, somatic presence, mutual trust in partnering lifts.",
    sampleUnits: [
      "Horton Technique: Fortifications, Lateral T's & Flat Backs",
      "Floorwork Flow, Inversions & Weight Sharing",
      "Lyrical Phrasing & Dramatic Intention",
      "Choreographic Composition & Student Solo Lab"
    ]
  },
  "ballet-foundations": {
    title: "Ballet Foundations & Anatomical Alignment",
    age: "Ages 5 – Adult",
    image: "assets/images/ballet.jpg",
    tagline: "Biomechanics, Grace, Classical Posture & Core Stability",
    overview: "A safe, anatomical approach to classical ballet foundations that celebrates diverse body types and fosters long-term physical health. Emphasis is placed on proper turnout from the hips, spinal elongation, core engagement, and expressive port de bras.",
    stemFocus: "Biomechanics of turnout, bone alignment, physics of balance on relevé.",
    selGoals: "Patience, personal accountability, refined mindfulness and poise.",
    sampleUnits: [
      "Barre Architecture: Plies, Tendus, Degages, Rond de Jambes",
      "Center Adagio: Balances, Port de Bras & Flow",
      "Allegro Fundamentals: Sauté, Changement, Petit Jete",
      "French Ballet Vocabulary & Stage Geography"
    ]
  },
  "step-percussion": {
    title: "Step, Body Percussion & Rhythmics",
    age: "Ages 7 – 18",
    image: "assets/images/steptap.jpg",
    tagline: "The Body as an Instrument: Power, Unity & Ancestral Percussion",
    overview: "Honoring the storied HBCU stepping tradition and African gumboot dance, this electrifying curriculum transforms the body into a polyrhythmic percussion ensemble. Students master intricate stomps, claps, vocal chants, and geometric synchronized formations.",
    stemFocus: "Acoustic resonance, mathematical fractions in compound rhythm, physics of impact.",
    selGoals: "Unbreakable teamwork, leadership, vocal projection, collective pride.",
    sampleUnits: [
      "The 8-Count Blueprint: Stomp, Clap, Slap & Snap",
      "Call-and-Response Syncopations & Vocal Projection",
      "Complex Marching Drills & Blind Synchronization",
      "Team Showcase Composition & Battle Cadences"
    ]
  },
  "liturgical-sacred": {
    title: "Liturgical & Sacred Movement Ministry",
    age: "All Ages & Faith Communities",
    image: "assets/images/liturgical.jpg",
    tagline: "Sacred Storytelling, Devotional Grace & Spiritual Uplift",
    overview: "A spiritual, uplifting movement practice utilizing expressive contemporary dance, flowing banners, flags, and sacred choreography to communicate message of hope, healing, restoration, and spiritual worship. Perfect for church ministries and interfaith arts festivals.",
    stemFocus: "Fluid mechanics of silk drape, spatial staging for spiritual transcendence.",
    selGoals: "Spiritual centering, community empathy, deep reverence, emotional healing.",
    sampleUnits: [
      "Devotional Warm-up & Contemplative Grounding",
      "Prop Artistry: Billowing Silks, Flags & Banners",
      "Scriptural Interpretation Through Movement",
      "Ceremonial Ensembles & Sacred Processionals"
    ]
  },
  "yoga-somatics": {
    title: "Yoga, Somatic Flow & Injury Prevention",
    age: "Ages 10 – Educators & Adults",
    image: "assets/images/yoga.jpg",
    tagline: "Nervous System Regulation, Breath Integration & Longevity",
    overview: "Designed specifically for young movers and active educators, this somatic practice blends Vinyasa yoga, myofascial release, breathwork, and alignment therapy. Promotes lifetime joint health, nervous system restoration, and cognitive calm.",
    stemFocus: "Parasympathetic nervous system activation, kinesiological recovery rates.",
    selGoals: "Stress relief, body positivity, active mindfulness, self-compassion.",
    sampleUnits: [
      "Pranayama Breathing & Diaphragmatic Regulation",
      "Dynamic Hip Opening & Spinal Mobility Flow",
      "Myofascial Release Techniques for Dancers",
      "Guided Meditation & Restorative Savasana"
    ]
  },
  "masterclasses": {
    title: "Masterclasses, Intensives & Educator Professional Development",
    age: "K-12 Teachers, Studios, University Dance Programs",
    image: "assets/images/rehearsal.jpg",
    tagline: "Pedagogical Excellence, Culturally Responsive Teaching & STEM Integration",
    overview: "Phe-be Smith delivers high-impact masterclasses, choreographic residencies, and accredited professional development workshops for dance educators, public school arts teachers, and studio directors looking to elevate their pedagogy.",
    stemFocus: "Dance-STEM curriculum design, kinesiological safety audits for classrooms.",
    selGoals: "Culturally sustaining pedagogy, trauma-informed movement instruction.",
    sampleUnits: [
      "Deconstructing Biomechanics for Safe Youth Instruction",
      "Creating Culturally Responsive Dance Curriculums",
      "Choreographic Staging for Large Youth Ensembles",
      "Measuring Social-Emotional Learning in Dance Education"
    ]
  }
};

class CurriculumModalEngine {
  constructor() {
    this.modal = document.getElementById('curriculum-modal');
    this.titleEl = document.getElementById('curr-modal-title');
    this.ageEl = document.getElementById('curr-modal-age');
    this.imgEl = document.getElementById('curr-modal-img');
    this.taglineEl = document.getElementById('curr-modal-tagline');
    this.descEl = document.getElementById('curr-modal-desc');
    this.stemEl = document.getElementById('curr-modal-stem');
    this.selEl = document.getElementById('curr-modal-sel');
    this.unitsListEl = document.getElementById('curr-modal-units');

    this.initEventListeners();
  }

  initEventListeners() {
    const closeBtn = document.getElementById('curr-modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close());
    }

    if (this.modal) {
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) this.close();
      });
    }

    // Attach to explore buttons on program cards
    document.querySelectorAll('.btn-explore-curriculum').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const progKey = btn.getAttribute('data-program');
        this.open(progKey);
      });
    });

    // Program play buttons trigger video lightbox
    document.querySelectorAll('.program-play-pill').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const title = btn.getAttribute('data-title');
        const img = btn.getAttribute('data-img');
        const cat = btn.getAttribute('data-cat');
        if (window.videoLightbox) {
          window.videoLightbox.open({
            title: title + " — Class in Action",
            category: cat || "Curriculum Preview",
            desc: "Watch how Phe-be structures pedagogical progressions, inspires student joy, and builds technical mastery.",
            imageSrc: img
          });
        }
      });
    });
  }

  open(key) {
    const data = PROGRAM_DATA[key];
    if (!data) return;

    if (this.titleEl) this.titleEl.textContent = data.title;
    if (this.ageEl) this.ageEl.textContent = data.age;
    if (this.imgEl) this.imgEl.src = data.image;
    if (this.taglineEl) this.taglineEl.textContent = data.tagline;
    if (this.descEl) this.descEl.textContent = data.overview;
    if (this.stemEl) this.stemEl.textContent = data.stemFocus;
    if (this.selEl) this.selEl.textContent = data.selGoals;

    if (this.unitsListEl) {
      this.unitsListEl.innerHTML = '';
      data.sampleUnits.forEach(unit => {
        const li = document.createElement('li');
        li.className = 'stem-point-item';
        li.innerHTML = `<span class="stem-point-bullet">✓</span> <span>${unit}</span>`;
        this.unitsListEl.appendChild(li);
      });
    }

    if (this.modal) {
      this.modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  close() {
    if (this.modal) {
      this.modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.curriculumModal = new CurriculumModalEngine();
});
