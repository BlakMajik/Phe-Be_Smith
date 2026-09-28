/**
 * Interactive Booking & Residency Inquiry Engine
 * Supports multi-tier inquiries: K-12 School Residencies, Dance Studio Masterclasses,
 * Choreographic Commissions, and Youth Development Workshops.
 */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('residency-inquiry-form');
  const orgTypeSelect = document.getElementById('inquiry-org-type');
  const programSelect = document.getElementById('inquiry-program');
  const estimateBox = document.getElementById('inquiry-estimate-pill');
  const toast = document.getElementById('booking-toast');

  // Dynamic estimate calculator
  function updateEstimate() {
    if (!orgTypeSelect || !programSelect || !estimateBox) return;

    const org = orgTypeSelect.value;
    const prog = programSelect.value;

    let estimateText = "Custom Proposal Based on Needs";

    if (org === 'school-k12') {
      estimateText = "Tier I/Title I Grant Eligible • Multi-Week Packages";
    } else if (org === 'studio') {
      estimateText = "Weekend Intensive / Single Day Masterclass Rates";
    } else if (org === 'commission') {
      estimateText = "Original Stage Work • Production & Repertoire Scope";
    } else if (org === 'community') {
      estimateText = "Subsidized Community Arts & Youth Empowerment Rates";
    }

    estimateBox.textContent = `Suggested Program: ${estimateText}`;
  }

  if (orgTypeSelect) orgTypeSelect.addEventListener('change', updateEstimate);
  if (programSelect) programSelect.addEventListener('change', updateEstimate);

  // Form submission handler
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('inquiry-name').value;
      const orgName = document.getElementById('inquiry-org-name').value;
      const email = document.getElementById('inquiry-email').value;

      if (!name || !email) {
        alert("Please fill in your name and email.");
        return;
      }

      // Show toast
      if (toast) {
        toast.innerHTML = `
          <div style="display:flex; align-items:center; gap:12px;">
            <span style="font-size:1.4rem;">✨</span>
            <div>
              <strong>Inquiry Received, ${name}!</strong>
              <div style="font-size:0.85rem; opacity:0.9;">Phe-be Smith and her team will respond within 24–48 hours.</div>
            </div>
          </div>
        `;
        toast.classList.add('active');
        setTimeout(() => {
          toast.classList.remove('active');
        }, 5000);
      }

      form.reset();
      updateEstimate();
    });
  }
});
