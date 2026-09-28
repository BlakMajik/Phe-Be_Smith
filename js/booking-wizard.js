/**
 * Interactive School Partnership & Residency Inquiry Engine
 * Supports K-12 schools, after-school programs, and community organizations.
 */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('residency-inquiry-form');
  const programTypeSelect = document.getElementById('inquiry-program-type');
  const estimateBox = document.getElementById('inquiry-estimate-pill');
  const toast = document.getElementById('booking-toast');

  // Dynamic helper text
  function updateProgramHelper() {
    if (!programTypeSelect || !estimateBox) return;

    const prog = programTypeSelect.value;
    let text = "Custom Partnership Proposal";

    switch (prog) {
      case 'Single-Day Workshop':
        text = "Focused introductory or special-event dance experience.";
        break;
      case '6–12 Week Residency':
        text = "Structured multi-week program developing progressive movement skills.";
        break;
      case 'After-School Program':
        text = "Recurring dance enrichment designed for after-school environments.";
        break;
      case 'Semester Program':
        text = "In-depth instruction developing technique, choreography, and performance.";
        break;
      case 'Year-Long Enrichment':
        text = "Ongoing dance education integrated into your school enrichment schedule.";
        break;
      case 'Choreography / Performance Program':
        text = "Rehearsal and staging designed for recitals, ceremonies, or showcases.";
        break;
      default:
        text = "Custom partnership tailored to your school or organization's goals.";
    }

    estimateBox.textContent = `Selected Format: ${text}`;
  }

  if (programTypeSelect) {
    programTypeSelect.addEventListener('change', updateProgramHelper);
  }

  // Form submission handler
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('inquiry-name');
      const orgInput = document.getElementById('inquiry-org');
      const emailInput = document.getElementById('inquiry-email');

      const name = nameInput ? nameInput.value.trim() : '';
      const org = orgInput ? orgInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';

      if (!name || !email) {
        alert("Please provide your name and email address.");
        return;
      }

      // Show toast
      if (toast) {
        toast.innerHTML = `
          <div style="display:flex; align-items:center; gap:12px;">
            <span style="font-size:1.4rem;">✨</span>
            <div>
              <strong>Thank you, ${name}!</strong>
              <div style="font-size:0.85rem; opacity:0.9;">Your inquiry for ${org || 'your organization'} has been received. Phe-be Smith will be in touch shortly.</div>
            </div>
          </div>
        `;
        toast.classList.add('active');
        setTimeout(() => {
          toast.classList.remove('active');
        }, 5000);
      }

      form.reset();
      updateProgramHelper();
    });
  }
});
