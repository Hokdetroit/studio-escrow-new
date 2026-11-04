'use client'

import { useRef, useState } from 'react'
import assets from './assets.json'
import s from './mortgage.module.css'

const partnerNames = ['Professional Home Buyers','Ocean City Buys','Want To Sell Now','Tarek Buys Houses','7Figure Wholesaling Cartel','Elevation Construction','eXp Realty','Motivated Leads','SEO meets REI','SimplySold','Want To Sell Now']
const groups: Record<string,string[]> = {
  'Mortgage & CRM': ['Salesforce','LendingPad','Bonzo','Follow Up Boss','Zillow','HubSpot'],
  'Marketing': ['Instagram','Google','LinkedIn','Facebook','TikTok','YouTube','SEMrush','Meta','Mailchimp','Linktree','Google Ads','Google Analytics','Google Tag Manager'],
  'Operations': ['Zapier','Slack','RingCentral','Notion','Google Sheets','Google Forms','Google Calendar','Discord'],
  'Commerce & web': ['Stripe','Shopify','QuickBooks','WordPress','Figma','Cloudflare'],
}
const descriptions: Record<string,string> = {
  'Mortgage & CRM': 'Explore connecting contact records, lead sources and pipeline events with your relationship workflows. Field mapping, LOS access and sync direction are scoped during setup.',
  'Marketing': 'Explore bringing campaign activity and lead capture into your CRM, so follow-up has the right context. Available events and permissions vary by platform.',
  'Operations': 'Explore reducing manual handoffs between your team’s calendars, communications, data and everyday tools. The team will confirm the supported workflow and connection method.',
  'Commerce & web': 'Explore connecting your business website, commerce or back-office tools to your CRM. Confirm the specific triggers, data access and account requirements during implementation.',
}
const tools = assets.filter(a=>!a.partner).map(a=>({...a,group:Object.keys(groups).find(g=>groups[g].includes(a.name))||'Operations'}))
const crms = [
  ['Total Expert','Webhook','Enterprise mortgage marketing and LOS workflows.'],
  ['Jungo','Zapier','Salesforce-based CRM and realtor relationship management.'],
  ['BNTouch','Zapier','Mortgage marketing automation and milestone sequences.'],
  ['Shape CRM','Zapier','Lead outreach, prioritization and referral relationships.'],
  ['Surefire by ICE','Webhook','Marketing workflows in the ICE / Encompass ecosystem.'],
  ['Bonzo','Zapier','Multi-channel relationship and outreach workflows.'],
]

export function MortgagePartners() {
  const rail = useRef<HTMLDivElement>(null)
  return <section className={s.partners} aria-labelledby="partners-title"><div className={s.partnerHeading}><div><span className={s.eyebrow}>Trusted across the Studio Escrow community</span><h2 id="partners-title">Good company to be in.</h2></div><div className={s.railControls}><button type="button" aria-label="Previous partner logos" onClick={()=>rail.current?.scrollBy({left:-500,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})}>←</button><button type="button" aria-label="Next partner logos" onClick={()=>rail.current?.scrollBy({left:500,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})}>→</button></div></div><div ref={rail} className={s.partnerRail} tabIndex={0} role="region" aria-label="Partner logos; scroll to explore">{assets.filter(a=>a.partner).map((a,i)=><figure key={a.logo}><img src={a.logo} alt={partnerNames[i]} width={180} height={80} loading="lazy" /><figcaption>{partnerNames[i]}</figcaption></figure>)}</div><p className={s.note}>A community spanning real estate, mortgage and service industries.</p></section>
}

export function MortgageIntegrations() {
  const [group,setGroup]=useState('All tools')
  const [query,setQuery]=useState('')
  const [selected,setSelected]=useState('LendingPad')
  const visible=tools.filter(t=>(group==='All tools'||t.group===group)&&t.name.toLowerCase().includes(query.toLowerCase().trim()))
  const current=visible.find(t=>t.name===selected)||visible[0]
  return <section id="integrations" className={`${s.section} ${s.integrations}`}><div className={s.sectionHeading}><span className={s.eyebrow}>Your tools. A more connected experience.</span><h2>Keep what works.<br />Connect what&apos;s next.</h2><p>Explore your mortgage and business toolkit. Select a logo to see where it fits in your workflow.</p></div>
    <div className={s.directoryToolbar}><div className={s.pills} aria-label="Filter integrations">{['All tools',...Object.keys(groups)].map(g=><button key={g} type="button" aria-pressed={group===g} onClick={()=>setGroup(g)}>{g}</button>)}</div><label className={s.search}><span>Find your tool</span><input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search integrations…" /></label></div>
    <div className={s.directoryLayout}><div><p className={s.resultCount} role="status">{visible.length} tools to explore</p><div className={s.logoGrid}>{visible.map(t=><button type="button" key={t.name} aria-pressed={current?.name===t.name} aria-controls="integration-detail" onClick={()=>{setSelected(t.name);if(matchMedia('(max-width: 760px)').matches) document.getElementById('integration-detail')?.scrollIntoView({block:'center',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})}}><img src={t.logo} alt="" width={40} height={40} loading="lazy" /><span>{t.name}</span></button>)}</div>{visible.length===0&&<div className={s.empty}><h3>No matching tools.</h3><p>Try another name, or explore the full directory.</p><button type="button" onClick={()=>{setGroup('All tools');setQuery('')}}>Clear filters</button></div>}</div>
    <aside id="integration-detail" className={s.integrationDetail} aria-live="polite" aria-atomic="true">{current?<><img src={current.logo} width={64} height={64} alt="" /><span className={s.eyebrow}>{current.group}</span><h3>{current.name}</h3><p>{descriptions[current.group]}</p><div><strong>Configured for your workflow</strong><p>Native, Zapier or webhook availability depends on the tool, plan and account permissions. Confirm your use case with our team.</p></div><a className={s.textLink} href="/schedule-demo">Discuss this connection →</a></>:<p>Your matching integration will appear here.</p>}</aside></div>
    <div className={s.crmHeading}><h3>Already have a mortgage CRM?</h3><p>Layer in relationship automation without starting over. Open a platform to explore its role and connection path.</p></div><div className={s.crmGrid}>{crms.map(([name,method,body])=><details key={name}><summary><span>{name}</span><span aria-hidden="true">+</span></summary><p>{body}</p><span className={s.connectionMethod}>{method} connection · scope confirmed at setup</span></details>)}</div>
    <p className={s.note}>Logos identify third-party products, not endorsements. Connection availability and supported fields must be confirmed before implementation.</p>
  </section>
}
