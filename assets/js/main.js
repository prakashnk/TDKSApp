document.addEventListener('DOMContentLoaded', () => {
  const amountButtons = document.querySelectorAll('.amount-options button');
  const customAmount = document.getElementById('custom-amount');

  amountButtons.forEach((button) => {
    button.addEventListener('click', () => {
      amountButtons.forEach((b) => b.classList.remove('active'));
      button.classList.add('active');
      customAmount.value = button.dataset.amount;
    });
  });

  const donationForm = document.querySelector('.donation-form');
  donationForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = donationForm.name.value || 'Friend';
    alert(`Thank you, ${name}! Your pledge helps us support Kannada culture.`);
  });

  const newsletterForm = document.querySelector('.newsletter-form');
  newsletterForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm['newsletter-email'].value;
    alert(`Thanks for subscribing! Updates will be sent to ${email}.`);
  });
});
