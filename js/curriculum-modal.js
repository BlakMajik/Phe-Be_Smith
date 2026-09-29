/**
 * Interactive Curriculum & Program Deep-Dive Modal Engine
 * Accurately represents Phe-be Smith's K–12 Dance Education Programs
 */

const PROGRAM_DATA = {
  "creative-movement": {
    title: "Creative Movement & Early Childhood Dance",
    age: "Early Childhood to Grade 2 (Ages 2–7)",
    image: "assets/images/earlychildhood.jpg",
    tagline: "Movement Exploration, Rhythm, Body Awareness & Joy",
    overview: "An engaging, developmentally tailored introduction to movement for young children. Students explore rhythm, musicality, coordination, spatial awareness, and creative expression through playful games, props, and imaginative storytelling.",
    stemFocus: "Physical awareness, spatial navigation, dynamic balance, and rhythm pattern recognition.",
    selGoals: "Confidence, social turn-taking, active listening, and joyful self-expression.",
    sampleUnits: [
      "Spatial Awareness: High, Medium, and Low Levels",
      "Rhythm, Musicality, and Percussion Clapping",
      "Bilateral Coordination and Locomotor Movement",
      "Creative Movement Games and Storytelling"
    ]
  },
  "ballet": {
    title: "Ballet",
    age: "Grades K–12 (Ages 5–18)",
    image: "assets/images/ballet.jpg",
    tagline: "Foundational Ballet Technique, Vocabulary, Posture & Coordination",
    overview: "Introduces students to foundational ballet technique in an encouraging and accessible environment. Focuses on classical terminology, posture, alignment, musicality, coordination, and graceful movement combinations.",
    stemFocus: "Postural alignment, center of balance, and core coordination.",
    selGoals: "Focus, discipline, poise, and personal dedication to technical growth.",
    sampleUnits: [
      "Foundational Barre Exercises & Alignment (Pliés, Tendus, Dégagés)",
      "Ballet Vocabulary and Terminology",
      "Center Floor Adagio and Port de Bras",
      "Allegro Footwork, Rhythm, and Musical Phrasing"
    ]
  },
  "hip-hop": {
    title: "Hip-Hop",
    age: "Grades 3–12 (Ages 8–18)",
    image: "assets/images/hiphop.jpg",
    tagline: "Rhythm, Musicality, Foundational Movement, Choreography & Performance",
    overview: "High-energy dance classes introducing students to foundational hip-hop movement, bounce, rhythm, isolations, and dynamic choreography. Emphasizes musical interpretation, personal style, teamwork, and performance confidence.",
    stemFocus: "Rhythmic synchronization, weight transfer dynamics, and spatial timing.",
    selGoals: "Self-expression, teamwork, positive peer encouragement, and stage confidence.",
    sampleUnits: [
      "Foundational Grooves: Bounce, Rock, and Isolations",
      "Rhythmic Footwork and Syncopated Timing",
      "Ensemble Choreography & Stage Formations",
      "Freestyle Circles & Creative Decision-Making"
    ]
  },
  "jazz-street-jazz": {
    title: "Jazz & Street Jazz",
    age: "Grades 3–12 (Ages 8–18)",
    image: "assets/images/teaching.jpg",
    tagline: "Technique, Musicality, Expressive Movement & Performance",
    overview: "Combines structured jazz dance technique with contemporary street jazz stylings. Students develop clean lines, sharp isolations, musicality, dynamic performance quality, and expressive movement choreography.",
    stemFocus: "Coordination of isolated body movements and directional velocity changes.",
    selGoals: "Stage presence, expressive storytelling, and collaborative rehearsal discipline.",
    sampleUnits: [
      "Jazz Isolations and Center Warm-Up Sequences",
      "Across-the-Floor Traveling Steps and Turns",
      "Street Jazz Phrasing and Dynamic Accentuation",
      "Small-Group Choreography Collaborations"
    ]
  },
  "contemporary-modern": {
    title: "Contemporary & Modern",
    age: "Grades 6–12 (Ages 11–18)",
    image: "assets/images/modern.jpg",
    tagline: "Technique, Musicality, Movement Exploration & Expressive Movement",
    overview: "Explores modern and contemporary dance principles, emphasizing floorwork, breath, suspensions, release technique, and expressive storytelling. Students explore spatial awareness, fluid phrasing, and creative choreography.",
    stemFocus: "Momentum dynamics, floor transitions, and balance stabilization.",
    selGoals: "Emotional literacy, artistic authenticity, and creative collaboration.",
    sampleUnits: [
      "Floorwork Progressions, Contraction & Release",
      "Suspension, Fall, and Recovery Dynamics",
      "Contemporary Phrase Work and Expressive Phrasing",
      "Movement Exploration and Partner Improvisation"
    ]
  },
  "funk-styles": {
    title: "Funk-Based Dance Styles",
    age: "Grades 3–12 (Ages 8–18)",
    image: "assets/images/hiphop_street_jazz_1788625331578.jpg",
    tagline: "Rhythm, Musicality, Movement Vocabulary & Creative Expression",
    overview: "Explores foundational funk-based movement vocabularies and illusion styles. Students learn rhythmic groove, musicality, sharp execution, and creative freestyle expression in an active, supportive atmosphere.",
    stemFocus: "Controlled muscle contraction/release timing and rhythmic precision.",
    selGoals: "Artistic curiosity, body confidence, and individuality in movement.",
    sampleUnits: [
      "Introduction to Funk Grooves and Timing",
      "Isolations, Stops, and Movement Accents",
      "Rhythmic Footwork and Coordination Exercises",
      "Creative Improvisation and Movement Vocabulary"
    ]
  },
  "step-dance": {
    title: "Step Dance",
    age: "Grades 3–12 (Ages 8–18)",
    image: "assets/images/steptap.jpg",
    tagline: "Rhythm, Coordination, Teamwork & Performance",
    overview: "A dynamic percussive movement tradition where students use footsteps, hand claps, and spoken word to produce intricate polyrhythms. Fosters exceptional teamwork, rhythmic timing, precision, and ensemble unity.",
    stemFocus: "Mathematical meter counting, acoustic rhythm layering, and spatial alignment.",
    selGoals: "Ensemble trust, vocal projection, mutual accountability, and school pride.",
    sampleUnits: [
      "Core Percussive Mechanics: Stomps, Claps, Slaps, and Snaps",
      "Call-and-Response Syncopations and Beat Counting",
      "Synchronized Team Formations and Directional Transitions",
      "Group Step Composition and Showcase Routines"
    ]
  },
  "tap": {
    title: "Tap Dance",
    age: "Grades K–12 (Ages 5–18)",
    image: "assets/images/steptap.jpg",
    tagline: "Rhythm, Timing, Coordination, Musicality & Vocabulary",
    overview: "Introduces foundational tap vocabulary, auditory rhythm awareness, syncopation, and weight-shifting coordination. Students learn how their feet become musical instruments while developing sequencing and musicality.",
    stemFocus: "Acoustic percussive mechanics, timing subdivisions, and ankle articulation.",
    selGoals: "Focus, auditory listening skills, patience, and rhythmic confidence.",
    sampleUnits: [
      "Foundational Tap Steps: Shuffles, Flaps, Ball Changes, and Cramp Rolls",
      "Rhythmic Meter and Syncopation Drills",
      "Traveling Time Steps and Across-the-Floor Combinations",
      "Ensemble Rhythm Sequencing and Call-and-Response"
    ]
  },
  "salsa": {
    title: "Salsa & Latin Dance",
    age: "Grades 6–12 (Ages 11–18)",
    image: "assets/images/teaching.jpg",
    tagline: "Rhythm, Musicality, Coordination & Cultural Dance Exploration",
    overview: "Introduces foundational Latin dance patterns, Cuban motion, cross-body leads, rhythmic timing on the clave beat, and cultural dance history. Focuses on social partner connection, coordination, and joyful movement.",
    stemFocus: "Polyrhythmic timing, syncopated counting, and core weight transfers.",
    selGoals: "Social coordination, cultural appreciation, and joyful partner communication.",
    sampleUnits: [
      "Foundational Salsa Basic Steps and Shines",
      "Understanding the Clave and Latin Percussion Timing",
      "Turns, Directional Changes, and Cross-Body Fundamentals",
      "Cultural History and Social Ensemble Sequencing"
    ]
  },
  "yoga-movement": {
    title: "Yoga & Movement",
    age: "Grades K–12 (Ages 5–18)",
    image: "assets/images/yoga.jpg",
    tagline: "Flexibility, Balance, Coordination & Physical Awareness",
    overview: "Age-appropriate yoga postures, somatic movement, dynamic stretching, balance challenges, and mindful breathing exercises. Helps youth develop physical body awareness, emotional self-regulation, posture, and flexibility.",
    stemFocus: "Skeletal alignment, respiratory mechanics, and neuromuscular balance.",
    selGoals: "Stress management, body positivity, mindfulness, and self-regulation.",
    sampleUnits: [
      "Mindful Breathwork and Somatic Centering",
      "Foundational Asanas: Standing Balance and Spinal Alignment",
      "Dynamic Flow Sequences for Flexibility and Core Strength",
      "Restorative Stretches and Guided Mindful Relaxation"
    ]
  },
  "tumbling-aerobics": {
    title: "Tumbling & Aerobics",
    age: "Pre-K to Grade 5 (Ages 4–11)",
    image: "assets/images/earlychildhood.jpg",
    tagline: "Beginner Tumbling, Coordination, Movement & Physical Activity",
    overview: "Introduces safe, beginner-level tumbling, spatial awareness, core coordination, balance, and aerobic games tailored to elementary developmental stages. Builds physical strength, agility, and motor confidence.",
    stemFocus: "Proprioception, safe weight-bearing, and gross motor agility.",
    selGoals: "Courage, body control, turn-taking, and celebrating athletic effort.",
    sampleUnits: [
      "Floor Mat Safety, Balance Beams, and Core Engagement",
      "Forward Rolls, Log Rolls, and Controlled Landings",
      "Aerobic Animal Walks and Agility Obstacle Circuits",
      "Coordination Drills and Dynamic Partner Stretches"
    ]
  },
  "liturgical-praise-flags": {
    title: "Liturgical / Praise / Flags",
    age: "All Ages & Community Programs",
    image: "assets/images/liturgical.jpg",
    tagline: "Expressive Devotional Movement, Flags & Community Choreography",
    overview: "Movement and choreography incorporating liturgical and praise dance traditions, expressive lyrical movement, and flowing silk flag banners where appropriate to the organization. Emphasizes grace, storytelling, and reverence.",
    stemFocus: "Spatial dynamics, fabric aerodynamics, and flowing kinetic pathways.",
    selGoals: "Spiritual expression, reverence, ensemble harmony, and community uplift.",
    sampleUnits: [
      "Foundational Lyrical Lines and Expressive Phrasing",
      "Silk Flag Mechanics: Waves, Sweeps, and Figure-Eights",
      "Group Processionals and Sacred Stage Formations",
      "Devotional Storytelling through Guided Movement"
    ]
  },
  "west-african-dance": {
    title: "West African Dance",
    age: "Grades K–12 (Ages 5–18)",
    image: "assets/images/community.jpg",
    tagline: "Foundational Movement, Rhythm, Musicality & Cultural Exploration",
    overview: "An invigorating exploration of traditional West African movement forms, polyrhythms, call-and-response songs, and cultural history. Students connect with live drumming or recorded percussion through grounded, joyful dance.",
    stemFocus: "Grounded polyrhythmic polycentric movement and aerobic stamina.",
    selGoals: "Cultural appreciation, community celebration, and joyful collective energy.",
    sampleUnits: [
      "Foundational Grounded Stance, Undulation, and Earth Connection",
      "Polyrhythmic Drum Breaks and Call-and-Response Syncopations",
      "Cultural Context, Historical Storytelling, and Traditions",
      "High-Energy Celebration Dances and Community Circle Exchanges"
    ]
  },
  "choreography-composition": {
    title: "Choreography & Dance Composition",
    age: "Grades 6–12 (Ages 11–18)",
    image: "assets/images/rehearsal.jpg",
    tagline: "Movement Creation, Sequencing, Musical Interpretation & Composition",
    overview: "Empowers youth to become choreographers and creators. Students explore movement motifs, choreographic tools (canon, inversion, tempo changes, levels), musical interpretation, and collaborative composition.",
    stemFocus: "Structural design, spatial geometric pathways, and thematic sequencing.",
    selGoals: "Creative problem-solving, constructive communication, and artistic leadership.",
    sampleUnits: [
      "Generating Original Movement Motifs from Themes or Prompts",
      "Choreographic Devices: Canon, Retrograde, Repetition, and Contrast",
      "Music Analysis, Phrasing, and Tempo Adaptation",
      "Peer Feedback, Revision, and Showcase Staging"
    ]
  },
  "performance-recital": {
    title: "Dance Performance & Recital Preparation",
    age: "Grades Pre-K–12 (Ages 4–18)",
    image: "assets/images/hero.jpg",
    tagline: "Choreography, Rehearsal, Stage Readiness & Ensemble Confidence",
    overview: "Structured programming designed to prepare students for school assemblies, seasonal recitals, graduation ceremonies, and community showcases. Covers rehearsal discipline, stage etiquette, teamwork, and performance readiness.",
    stemFocus: "Spatial spacing, formation transitions, and stage geometry awareness.",
    selGoals: "Perseverance, stage confidence, teamwork, and pride in shared accomplishments.",
    sampleUnits: [
      "Repertoire Rehearsal and Technical Polish",
      "Stage Directions, Entrances, Exits, and Cue Timing",
      "Costume and Performance Etiquette Preparation",
      "Dress Rehearsal and Community Performance"
    ]
  },
  "dance-anatomy": {
    title: "Dance & Anatomy / Physiology",
    age: "Grades 3–12 (Ages 8–18)",
    image: "assets/images/yoga.jpg",
    tagline: "Movement, Physical Awareness, Alignment & Body Mechanics",
    overview: "Uses dance movement to introduce students to foundational concepts about the human body. Students learn about major muscle groups, bone alignment, joints, breath, and safe movement mechanics while dancing.",
    stemFocus: "Basic musculoskeletal anatomy, joint articulation, and safe range of motion.",
    selGoals: "Body appreciation, injury prevention habits, and mindful physical awareness.",
    sampleUnits: [
      "Discovering the Spine, Core, and Postural Alignment",
      "How Muscles and Joints Create Movement Levers",
      "Breath Mechanics and Active Warm-Up / Cool-Down Principles",
      "Safe Landings, Foot Mechanics, and Joint Care"
    ]
  },
  "dance-stem": {
    title: "Dance & STEM Enrichment",
    age: "Grades K–8 (Ages 5–14)",
    image: "assets/images/modern.jpg",
    tagline: "Integrating Movement with Educational & Scientific Concepts",
    overview: "Connects foundational academic and STEM concepts with experiential dance learning. Students explore fractions through musical rhythm, geometric shapes through spatial formations, and basic physics principles through movement.",
    stemFocus: "Geometric formations, symmetry/asymmetry, momentum, and fraction rhythms.",
    selGoals: "Cross-disciplinary curiosity, collaborative discovery, and experiential learning.",
    sampleUnits: [
      "Rhythm Fractions: Whole, Half, Quarter, and Eighth-Note Steps",
      "Geometry on Stage: Lines, Triangles, Radii, and Tessellations",
      "Physics in Motion: Force, Gravity, Momentum, and Balance",
      "Movement Experiments: Translating Science Concepts into Choreography"
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

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal && this.modal.classList.contains('active')) {
        this.close();
      }
    });

    // Attach to explore buttons on program cards
    document.querySelectorAll('.btn-explore-curriculum').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const progKey = btn.getAttribute('data-program');
        if (progKey) {
          this.open(progKey);
        }
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
            title: title + " — Program Highlight",
            category: cat || "Dance Education",
            desc: "Engaging, age-appropriate dance education designed to build technique, confidence, and creativity.",
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
