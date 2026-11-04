import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { INDEXING_ENABLED, SITE_URL, builtPaths, canonicalUrl, href, resolvePath } from '@/lib/routes'

const MIRROR_DIR = path.join(process.cwd(), 'mirror', 'pages')

const LIVE_LINK = /https:\/\/studioescrow\.cloud(\/[a-z0-9-]+)(?![a-z0-9-]|\/[a-z0-9])/g

/** Root-relative page links (HTML attrs and escaped RSC props) such as "/medical-suite". */
const RELATIVE_PAGE_LINK = /(?<=href=\\?"|\\?"href\\?":\\?")(\/[a-z0-9-]+)(?=\\?")/g

/**
 * The pricing footer labels its schedule-demo link "Contact". Matches both the
 * HTML attribute and the escaped RSC payload so React props stay in sync.
 */
const FOOTER_CONTACT_LINK = /https:\/\/studioescrow\.cloud\/schedule-demo(?=\\?"(?:>|,\\?"children\\?":\\?")Contact\b)/g

const HIDDEN_HOME_SERVICES_LINK = '<a href="#" class="footer-link hide">Home Services'

export function rewriteMirroredHtml(html: string, pagePath: string): string {
  let out = html
    .replace(FOOTER_CONTACT_LINK, href('contact'))
    .replace(LIVE_LINK, (match, p: string) => (builtPaths.includes(p) ? p : match))
    .replace(RELATIVE_PAGE_LINK, (match, p: string) => (builtPaths.includes(p) ? match : `${SITE_URL}${p}`))
    .replace(HIDDEN_HOME_SERVICES_LINK, `<a href="${resolvePath('/home-services')}" class="footer-link hide">Home Services`)

  const headTags = [
    `<script>window.__SE_BUILT_PATHS__=${JSON.stringify(builtPaths)};window.__SE_SITE__=${JSON.stringify(SITE_URL)}</script>`,
    `<link rel="canonical" href="${canonicalUrl(pagePath)}"/>`,
    INDEXING_ENABLED ? '' : '<meta name="robots" content="noindex, nofollow"/>',
  ].join('')

  out = out.replace(/<head[^>]*>/i, (tag) => `${tag}${headTags}`)
  return out
}

export async function serveMirroredPage(file: string, pagePath: string): Promise<Response> {
  const html = await readFile(path.join(MIRROR_DIR, `${file}.html`), 'utf8')
  return new Response(rewriteMirroredHtml(html, pagePath), {
    headers: { 'content-type': 'text/html; charset=utf-8' },
  })
}
