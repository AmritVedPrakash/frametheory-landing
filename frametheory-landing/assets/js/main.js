/* Navigation, entrance animations and WhatsApp enquiry handoff. No dependencies. */
'use strict';
(() => {
  const header = document.querySelector('.site-header');
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#navigation');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function closeMenu() {
    nav.classList.remove('is-open');
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Open navigation');
  }
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    nav.classList.toggle('is-open', open);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menu.focus();
    }
  });
  document.addEventListener('click', event => {
    if (!header.contains(event.target)) closeMenu();
  });
  window.matchMedia('(min-width: 581px)').addEventListener('change', closeMenu);
  const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 12);
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    document.documentElement.classList.add('js-motion');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
  }

  const service = document.querySelector('#service');
  document.querySelectorAll('[data-service]').forEach(link => {
    link.addEventListener('click', () => { service.value = link.dataset.service; });
  });

  // Verified public business WhatsApp number from frametheorysocials.in.
  // This prepares a message; it never sends without the visitor's action.
  const WHATSAPP_NUMBER = '919711376997';
  const form = document.querySelector('#enquiry-form');
  const status = document.querySelector('#form-status');
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const fields = new FormData(form);
    const value = name => String(fields.get(name) || '').trim();
    if (['name', 'brand', 'message'].some(name => !value(name))) {
      status.textContent = 'Please add your name, brand and a short brief.';
      return;
    }
    const message = [
      'Hi Frame Theory Socials! I would like to discuss a project.',
      '', `Name: ${value('name')}`, `Email: ${value('email')}`,
      `Brand: ${value('brand')}`, `Service: ${value('service')}`,
      '', `Project brief: ${value('message')}`
    ].join('\n');
    const destination = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    // A normal, user-initiated navigation avoids popup blockers on mobile browsers.
    window.location.assign(destination);
  });
  document.querySelector('#year').textContent = String(new Date().getFullYear());
})();
