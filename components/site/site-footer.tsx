import { footerLinks, href } from '@/lib/routes'

export function SiteFooter() {
  return (
    <footer className="ma3IoW_footer">
      <div className="ma3IoW_container">
        <div className="ma3IoW_footerBottom">
          <span>© 2026 Studio Escrow</span>
          <nav aria-label="Footer" style={{ flexWrap: 'wrap', columnGap: 24, rowGap: 12 }}>
            {footerLinks.map((link) => (
              <a key={link.id} href={href(link.id)}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
