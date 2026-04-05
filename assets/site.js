(function () {
  const header = document.querySelector('.header');
  const nav = document.getElementById('site-nav');
  const menuButton = document.getElementById('mobile-menu-button');
  const navLinks = nav ? Array.from(nav.querySelectorAll('a')) : [];
  const pagePath = window.location.pathname.replace(/index\.html$/i, '') || '/';

  if (!header || !nav || !menuButton) {
    return;
  }

  const normalizeUrl = function (href) {
    if (!href) {
      return null;
    }

    const url = new URL(href, window.location.origin);
    const normalizedPath = url.pathname.replace(/index\.html$/i, '') || '/';

    return {
      path: normalizedPath,
      hash: url.hash
    };
  };

  const closeMenu = function () {
    nav.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open menu');
  };

  const toggleMenu = function () {
    const isOpen = nav.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  };

  const syncHeaderState = function () {
    header.classList.toggle('is-scrolled', window.scrollY > 12 || nav.classList.contains('is-open'));
  };

  const updateActiveNav = function () {
    const currentHash = window.location.hash;

    navLinks.forEach(function (link) {
      const target = normalizeUrl(link.getAttribute('href'));
      let isActive = false;

      if (target) {
        if (target.path === pagePath) {
          if (!target.hash) {
            isActive = pagePath === '/';
          } else {
            isActive = currentHash === target.hash;
          }
        }

        if (!isActive && target.path === '/research/' && pagePath === '/research/') {
          isActive = true;
        }
      }

      link.classList.toggle('is-active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  menuButton.addEventListener('click', function () {
    toggleMenu();
    syncHeaderState();
  });

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      closeMenu();
      syncHeaderState();
      window.setTimeout(updateActiveNav, 0);
    });
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 720) {
      closeMenu();
    }
    syncHeaderState();
  });

  window.addEventListener('scroll', syncHeaderState, { passive: true });
  window.addEventListener('hashchange', updateActiveNav);

  syncHeaderState();
  updateActiveNav();

  const contactForm = document.querySelector('.contact-form');

  if (!contactForm) {
    return;
  }

  const submitButton = contactForm.querySelector('button[type="submit"]');
  const statusMessage = contactForm.querySelector('.form-status');
  const defaultButtonLabel = submitButton ? submitButton.textContent : 'Send request';

  const setStatus = function (message, state) {
    if (!statusMessage) {
      return;
    }

    statusMessage.textContent = message || '';
    statusMessage.classList.remove('is-success', 'is-error');

    if (state) {
      statusMessage.classList.add(state);
    }
  };

  contactForm.addEventListener('submit', async function (event) {
    event.preventDefault();
    setStatus('');

    if (!submitButton) {
      return;
    }

    const action = contactForm.getAttribute('action');

    if (!action) {
      setStatus('Form delivery is not connected yet. Wire this form to Formspree, FormSubmit, or another endpoint in the form action attribute.', 'is-error');
      return;
    }

    const formData = new FormData(contactForm);

    submitButton.disabled = true;
    submitButton.textContent = contactForm.dataset.loadingMessage || 'Routing briefing...';

    try {
      const response = await fetch(action, {
        method: (contactForm.getAttribute('method') || 'POST').toUpperCase(),
        headers: {
          Accept: 'application/json'
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      contactForm.reset();
      setStatus(contactForm.dataset.successMessage || 'Briefing received. We may or may not get back to you.', 'is-success');
    } catch (error) {
      setStatus(contactForm.dataset.errorMessage || 'Transmission failed. Try again in a moment. If the matter is unusually sensitive, use a more discreet channel.', 'is-error');
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = defaultButtonLabel;
    }
  });
}());
