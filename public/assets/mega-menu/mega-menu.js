(() => {
  const SITE = 'https://studioescrow.cloud'
  const ICONS = {
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    inbox: '<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',
    layout: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>',
    star: '<path d="M11.5 2.8a.5.5 0 0 1 1 0l2.3 4.7 5.2.8a.5.5 0 0 1 .3.9l-3.8 3.6.9 5.2a.5.5 0 0 1-.8.6L12 16.1l-4.6 2.5a.5.5 0 0 1-.8-.6l.9-5.2-3.8-3.6a.5.5 0 0 1 .3-.9l5.2-.8z"/>',
    sparkles: '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
    bot: '<rect width="16" height="12" x="4" y="8" rx="2"/><path d="M12 4v4"/><path d="M9 13v2"/><path d="M15 13v2"/>',
    book: '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>',
    plug: '<path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8z"/>',
    heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7z"/>',
    home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
    landmark: '<path d="M3 22h18"/><path d="M6 18v-7"/><path d="M10 18v-7"/><path d="M14 18v-7"/><path d="M18 18v-7"/><path d="M12 2 20 7H4z"/>',
    briefcase: '<rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z"/>',
    grid: '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
  }

  const MENU = [
    {
      id: 'platform',
      label: 'Platform',
      columns: [
        {
          title: 'Grow & convert',
          links: [
            { label: 'CRM & Automations', desc: 'Pipelines, contacts, and multi-step workflows', href: `${SITE}/crm-automations`, icon: 'users' },
            { label: 'Unified Inbox', desc: 'SMS, email, and social in one thread', href: `${SITE}/unified-inbox`, icon: 'inbox' },
            { label: 'Websites & Funnels', desc: 'Pages that route leads into your CRM', href: `${SITE}/website-funnel-builder`, icon: 'layout' },
            { label: 'Reputation', desc: 'Request, monitor, and reply to reviews', href: `${SITE}/reputation`, icon: 'star' },
          ],
        },
        {
          title: 'AI & knowledge',
          links: [
            { label: 'AI Studio', desc: 'Content, reporting, and workflow assistance', href: `${SITE}/ai-studio`, icon: 'sparkles' },
            { label: 'AI Agents', desc: 'Reception, follow-up, and conversations', href: `${SITE}/ai-agents`, icon: 'bot' },
            { label: 'Integrations', desc: 'Connect the tools you already use', href: `${SITE}/integrations`, icon: 'plug' },
          ],
        },
      ],
      feature: {
        eyebrow: 'Overview',
        title: 'See every feature',
        desc: 'Tour the CRM, messaging, AI, scheduling, and automation tools in one place.',
        href: '/features',
        image: '/images/social-scheduling.png',
        cta: 'Explore features',
      },
    },
    {
      id: 'solutions',
      label: 'Solutions',
      columns: [
        {
          title: 'By industry',
          links: [
            { label: 'Medical Suite', desc: 'Scheduling and secure communications, with a BAA', href: '/medical-suite', icon: 'heart' },
            { label: 'Real Estate', desc: 'Lead routing and nurture for agents and teams', href: `${SITE}/real-estate`, icon: 'home' },
            { label: 'Mortgage Suite', desc: 'Scale plan plus a done-for-you buildout', href: '/mortgage-suite', icon: 'landmark' },
            { label: 'Agencies & Consultants', desc: 'Run client accounts from one dashboard', href: `${SITE}/agencies-consultants`, icon: 'briefcase' },
          ],
        },
        {
          title: 'Get set up',
          links: [
            { label: 'Done-for-you setup', desc: 'Branding, website, and workflows built for you', href: `${SITE}/schedule-demo`, icon: 'wrench' },
            { label: 'Compare plans', desc: 'Growth, Scale, and industry suites', href: '/pricing', icon: 'grid' },
          ],
        },
      ],
      feature: {
        eyebrow: 'Not sure where to start?',
        title: 'Talk to our team',
        desc: 'Get a walkthrough tailored to your industry and the tools you use today.',
        href: `${SITE}/schedule-demo`,
        cta: 'Book a demo',
      },
    },
    { id: 'pricing', label: 'Pricing', href: '/pricing' },
    {
      id: 'resources',
      label: 'Resources',
      compact: true,
      columns: [
        {
          title: 'Learn',
          links: [
            { label: 'Knowledge Base', desc: 'Guides and how-to articles', href: `${SITE}/knowledge-base`, icon: 'book' },
            { label: 'All features', desc: 'The complete platform overview', href: '/features', icon: 'grid' },
            { label: 'Integrations', desc: 'Supported apps and connections', href: `${SITE}/integrations`, icon: 'plug' },
          ],
        },
        {
          title: 'Company',
          plain: true,
          links: [
            { label: 'About', href: `${SITE}/about` },
            { label: 'Careers', href: `${SITE}/careers` },
            { label: 'Contact', href: `${SITE}/contact` },
            { label: 'Privacy Policy', href: `${SITE}/privacy` },
            { label: 'Terms of Service', href: `${SITE}/terms` },
          ],
        },
      ],
    },
  ]

  const LOGIN = 'https://the.studioescrow.cloud/'
  const DEMO = `${SITE}/schedule-demo`

  const esc = (value) => String(value).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c])
  const isExternal = (href) => /^https?:/.test(href)
  const linkAttrs = (href) => `href="${esc(href)}"${isExternal(href) ? ' target="_blank" rel="noopener noreferrer"' : ''}`
  const newTab = (href) => (isExternal(href) ? '<span class="se-sr"> (opens in a new tab)</span>' : '')
  const icon = (name) => `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ''}</svg>`
  const chevron = '<svg class="se-chev" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>'
  const arrow = '<svg class="se-arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>'

  const renderLink = (link, plain) => plain
    ? `<li><a class="se-plain" ${linkAttrs(link.href)}>${esc(link.label)}${newTab(link.href)}</a></li>`
    : `<li><a class="se-item" ${linkAttrs(link.href)}>
        <span class="se-icon">${icon(link.icon)}</span>
        <span class="se-text"><span class="se-label">${esc(link.label)}</span><span class="se-desc">${esc(link.desc)}</span></span>
        ${newTab(link.href)}</a></li>`

  const renderFeature = (feature) => feature ? `
    <a class="se-feature${feature.image ? ' has-image' : ''}" ${linkAttrs(feature.href)}>
      ${feature.image ? `<span class="se-feature-media"><img src="${esc(feature.image)}" alt="" loading="lazy" decoding="async"></span>` : ''}
      <span class="se-feature-body">
        <span class="se-eyebrow">${esc(feature.eyebrow)}</span>
        <span class="se-feature-title">${esc(feature.title)}</span>
        <span class="se-feature-desc">${esc(feature.desc)}</span>
        <span class="se-feature-cta">${esc(feature.cta)} ${arrow}</span>
      </span>${newTab(feature.href)}
    </a>` : ''

  const renderPanel = (item) => `
    <div class="se-panel${item.compact ? ' is-compact' : ''}" id="se-panel-${item.id}" role="region" aria-label="${esc(item.label)}">
      <div class="se-panel-inner">
        ${item.columns.map((col) => `
          <div class="se-col">
            <p class="se-col-title">${esc(col.title)}</p>
            <ul>${col.links.map((l) => renderLink(l, col.plain)).join('')}</ul>
          </div>`).join('')}
        ${renderFeature(item.feature)}
      </div>
    </div>`

  const currentPath = location.pathname.replace(/\/mirror\/index\.html$/, '/')

  const desktopNav = MENU.map((item) => item.href
    ? `<li><a class="se-top" ${linkAttrs(item.href)}>${esc(item.label)}</a></li>`
    : `<li class="se-has-panel" data-menu="${item.id}">
        <button class="se-top" type="button" aria-expanded="false" aria-controls="se-panel-${item.id}">${esc(item.label)}${chevron}</button>
        ${renderPanel(item)}
      </li>`).join('')

  const mobileNav = MENU.map((item) => item.href
    ? `<li><a class="se-m-top" ${linkAttrs(item.href)}>${esc(item.label)}</a></li>`
    : `<li class="se-m-group">
        <button class="se-m-top" type="button" aria-expanded="false" aria-controls="se-m-${item.id}">${esc(item.label)}${chevron}</button>
        <div class="se-m-panel" id="se-m-${item.id}" hidden>
          ${item.columns.map((col) => `<p class="se-col-title">${esc(col.title)}</p><ul>${col.links.map((l) => renderLink(l, col.plain)).join('')}</ul>`).join('')}
        </div>
      </li>`).join('')

  const markup = `
    <a class="se-skip" href="#main-content">Skip to content</a>
    <div class="se-bar">
      <a class="se-brand" href="/" aria-label="Studio Escrow home"${currentPath === '/' ? ' aria-current="page"' : ''}>
        <span class="se-mark" aria-hidden="true"></span>Studio Escrow
      </a>
      <nav class="se-desktop" aria-label="Main"><ul class="se-top-list">${desktopNav}</ul></nav>
      <div class="se-actions">
        <a class="se-login" ${linkAttrs(LOGIN)}>Log in${newTab(LOGIN)}</a>
        <a class="se-cta" ${linkAttrs(DEMO)}>Book a Demo ${arrow}${newTab(DEMO)}</a>
        <button class="se-burger" type="button" aria-expanded="false" aria-controls="se-mobile" aria-label="Open menu"><span></span><span></span></button>
      </div>
    </div>
    <div class="se-mobile" id="se-mobile" hidden>
      <nav aria-label="Main mobile"><ul>${mobileNav}</ul></nav>
      <div class="se-m-actions">
        <a class="se-cta" ${linkAttrs(DEMO)}>Book a Demo ${arrow}${newTab(DEMO)}</a>
        <a class="se-login" ${linkAttrs(LOGIN)}>Log in${newTab(LOGIN)}</a>
      </div>
    </div>`

  function mount(root) {
    root.classList.add('se-nav')
    root.innerHTML = markup
    root.querySelectorAll('a[href]').forEach((a) => {
      const href = a.getAttribute('href')
      if (!isExternal(href) && href === currentPath && !a.hasAttribute('aria-current')) a.setAttribute('aria-current', 'page')
    })

    const groups = [...root.querySelectorAll('.se-has-panel')]
    const finePointer = matchMedia('(hover: hover) and (pointer: fine)')
    let openGroup = null
    let closeTimer = 0

    const setOpen = (group) => {
      clearTimeout(closeTimer)
      if (openGroup === group) return
      if (openGroup) {
        openGroup.classList.remove('is-open')
        openGroup.querySelector('.se-top').setAttribute('aria-expanded', 'false')
      }
      openGroup = group
      root.classList.toggle('has-open', Boolean(group))
      if (group) {
        group.classList.add('is-open')
        group.querySelector('.se-top').setAttribute('aria-expanded', 'true')
      }
    }
    const scheduleClose = () => {
      clearTimeout(closeTimer)
      closeTimer = setTimeout(() => setOpen(null), 160)
    }

    groups.forEach((group) => {
      const trigger = group.querySelector('.se-top')
      trigger.addEventListener('click', () => setOpen(openGroup === group ? null : group))
      group.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse' && finePointer.matches) setOpen(group) })
      group.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse' && finePointer.matches) scheduleClose() })
      group.addEventListener('focusout', (e) => { if (!group.contains(e.relatedTarget)) scheduleClose() })
      trigger.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
          e.preventDefault()
          setOpen(group)
          group.querySelector('.se-panel a')?.focus()
        }
      })
    })

    document.addEventListener('pointerdown', (e) => { if (openGroup && !root.contains(e.target)) setOpen(null) })

    const burger = root.querySelector('.se-burger')
    const mobile = root.querySelector('.se-mobile')
    const setMobile = (open) => {
      burger.setAttribute('aria-expanded', String(open))
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
      mobile.hidden = !open
      root.classList.toggle('is-mobile-open', open)
      document.documentElement.classList.toggle('se-lock', open)
    }
    burger.addEventListener('click', () => setMobile(mobile.hidden))
    root.querySelectorAll('.se-m-group > .se-m-top').forEach((btn) => {
      btn.addEventListener('click', () => {
        const panel = document.getElementById(btn.getAttribute('aria-controls'))
        const open = btn.getAttribute('aria-expanded') !== 'true'
        btn.setAttribute('aria-expanded', String(open))
        panel.hidden = !open
      })
    })
    mobile.addEventListener('click', (e) => { if (e.target.closest('a')) setMobile(false) })
    matchMedia('(min-width: 992px)').addEventListener('change', (e) => { if (e.matches) setMobile(false) })

    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return
      if (openGroup) {
        const trigger = openGroup.querySelector('.se-top')
        setOpen(null)
        trigger.focus()
      } else if (!mobile.hidden) {
        setMobile(false)
        burger.focus()
      }
    })

    const onScroll = () => root.classList.toggle('is-scrolled', scrollY > 8)
    onScroll()
    addEventListener('scroll', onScroll, { passive: true })
  }

  const init = () => document.querySelectorAll('[data-se-megamenu]:not(.se-nav)').forEach(mount)
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init)
  else init()
  window.__seMegaMenuInit = init
})()
