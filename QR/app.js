/**
 * TEJ AUTOSYSTEM PVT. LTD. - EXECUTIVE QR HUB
 * Client Logic: WhatsApp Deep-linking & PDF Viewer Modal
 */

const WHATSAPP_PHONE = '918053650222';

const WHATSAPP_MESSAGE = `Hello Tej Auto System,
I am interested in your products and would like to know more about your solutions. Please share the product details and quotation.
Thank you!`;

document.addEventListener('DOMContentLoaded', () => {
  updateWhatsAppLinks();
  initKeyboardEsc();
});

/* ==========================================================================
   1. WhatsApp Deep-Linking Engine
   ========================================================================== */
function getWhatsAppUrl() {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}

function updateWhatsAppLinks() {
  const url = getWhatsAppUrl();
  const links = document.querySelectorAll('a[href*="wa.me"]');
  links.forEach(link => {
    link.href = url;
  });
}

/* ==========================================================================
   2. PDF Viewer Modal Controller
   ========================================================================== */
function openPdfModal(pdfPath, title) {
  const modal = document.getElementById('modal-pdf');
  const iframe = document.getElementById('pdf-frame');
  const titleEl = document.getElementById('pdf-title');
  const dlLink = document.getElementById('pdf-download-link');

  if (!modal || !iframe) return;
  if (titleEl) titleEl.textContent = title;
  iframe.src = pdfPath;
  if (dlLink) {
    dlLink.href = pdfPath;
    dlLink.download = pdfPath.split('/').pop();
  }
  modal.classList.add('active');
}

function closePdfModal() {
  const modal = document.getElementById('modal-pdf');
  const iframe = document.getElementById('pdf-frame');
  if (modal) {
    modal.classList.remove('active');
    if (iframe) iframe.src = '';
  }
}

function handleBackdropClick(e, modalId) {
  const modal = document.getElementById(modalId);
  if (modal && e.target === modal) {
    if (modalId === 'modal-pdf') closePdfModal();
  }
}

function initKeyboardEsc() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closePdfModal();
    }
  });
}
