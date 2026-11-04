import { FeatureUniverse } from '@/components/features/feature-universe'
import { FeatureExplorer } from '@/components/features/feature-explorer'
import { FeatureIntegrations } from '@/components/features/feature-integrations'
import { MedicalFeature } from '@/components/features/medical-feature'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { routeMetadata } from '@/lib/routes'
import s from '@/components/features/features.module.css'

export const metadata = routeMetadata('features')

export default function FeaturesPage() {
  return <main id="main" className={`${s.page} font-sans`}>
    <FeatureUniverse/>
    <nav className={s.sectionNav} aria-label="Features page sections"><a href="#feature-explorer">Explore the platform <ArrowUpRight size={15}/></a><a href="#connected">How it connects</a><a href="#medical">Medical Suite</a><a href="#connections">Integrations</a><a href="/pricing">Compare plans <ArrowUpRight size={15}/></a></nav>
    <FeatureExplorer/>
    <section id="connected" className={s.connected}><div className={s.sectionIntro}><div><span className={s.eyebrow}>Not just more tools. A better flow.</span><h2>One inquiry.<br/><span>So many things, handled.</span></h2></div><p>Here is how the pieces can work together. A connected journey, rather than another disconnected subscription.</p></div><div className={s.flow}>{[
      ['A visitor reaches out','Your website or form captures the inquiry and creates a contact.'],
      ['The follow-up begins','A configured workflow sends a welcome and assigns the next task.'],
      ['A conversation becomes a booking','Your team responds from one inbox and shares an available appointment.'],
      ['The relationship keeps growing','A timely check-in, an invoice or a feedback request keeps things moving.'],
    ].map(([title,body],i)=><article key={title}><span className={s.flowNumber}>{String(i+1).padStart(2,'0')}<ArrowRight size={20}/></span><h3>{title}</h3><p>{body}</p></article>)}</div><p className={s.note}>Illustrative workflow. Outreach depends on consent, configured triggers and your connected services.</p></section>
    <MedicalFeature/>
    <FeatureIntegrations/>
    <section className={s.suites}><span className={s.eyebrow}>One platform. Your world.</span><h2>Built for the way<br/>your industry works.</h2><div><a href="/mortgage-suite"><span>Mortgage Suite</span><p>From first inquiry to long-term borrower relationships.</p><ArrowUpRight/></a><a href="/real-estate-suite"><span>Real Estate Suite</span><p>Buyers, sellers and the next referral. Connected.</p><ArrowUpRight/></a></div></section>
    <section className={s.cta}><span className={s.eyebrow}>Make room for what comes next</span><h2>You bring the ambition.<br/>We’ll connect the pieces.</h2><p>Tell us what is slowing you down. We’ll map the tools, workflows and custom solutions around your business.</p><div><a className={s.primary} href="/schedule-demo">Build your workspace <ArrowUpRight size={18}/></a><a href="/pricing">Find your plan <ArrowRight size={17}/></a></div></section>
  </main>
}
