/**
 * Interactive School Partnership & Residency Inquiry Engine
 * Supports K-12 schools, after-school programs, and community organizations.
 */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('residency-inquiry-form');
  const toast = document.getElementById('booking-toast');

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
              <div style="font-size:0.85rem; opacity:0.9;">Your message for ${org || 'your organization'} has been received. Phe-be Smith will be in touch shortly.</div>
            </div>
          </div>
        `;
        toast.classList.add('active');
        setTimeout(() => {
          toast.classList.remove('active');
        }, 5000);
      }

      form.reset();
    });
  }
});
