'use client'

import { useEffect, useRef, useState } from 'react'
import s from './mortgage.module.css'

export function MortgageNurture() {
  const [windowDays, setWindowDays] = useState(60)
  const [active, setActive] = useState(0)
  const root = useRef<HTMLElement>(null)
  const steps = [
    { time: 'Day 0 · A new opportunity', title: 'A lead arrives. The conversation starts.', body: 'Capture the inquiry from a form, campaign or referral. AI-assisted response collects goals and timing, while your CRM keeps the contact history together.', channel: 'Lead intake', status: 'New inquiry', message: 'Thanks for reaching out. Are you exploring a home purchase or a refinance?', next: 'Assign a loan officer and confirm the follow-up window.' },
    { time: `Days 1–${windowDays-1} · Keep building trust`, title: 'Useful guidance. At the right pace.', body: 'Share educational content on preparing to apply, credit considerations and down payments. Keep your name familiar without asking your team to remember every touchpoint.', channel: 'Educational email', status: 'Nurturing', message: 'A little preparation goes a long way. Here are a few things to discuss with your loan officer before applying.', next: 'Adjust the sequence when the lead replies or books.' },
    { time: `Day ${windowDays} · Time to reconnect`, title: 'The window opens. Your team is ready.', body: 'Trigger a check-in when the configured date arrives. Include a booking link, update the CRM stage and let your team confirm the borrower’s next steps.', channel: 'Personal check-in', status: 'Follow-up due', message: 'It’s time for our check-in. Want to review your options together? Choose a time that works for you.', next: 'If no booking follows, create a personal call task.' },
    { time: `Day ${windowDays}+ · Keep it personal`, title: 'A human touch. A lasting relationship.', body: 'Bring the loan officer back into the loop with conversation notes and a clear next action. Follow with a relevant realtor introduction when appropriate, and keep relationships alive after closing.', channel: 'Team handoff', status: 'Officer review', message: 'Follow-up task: review the conversation, confirm consent and reach out personally.', next: 'Continue with a consultation, referral or tailored nurture.' },
  ]
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.step))
    }, { rootMargin: '-30% 0px -69% 0px', threshold: 0 })
    root.current?.querySelectorAll('[data-step]').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  const current = steps[active]
  return <section id="nurture" ref={root} className={s.nurture}>
    <div className={s.sectionHeading}><span className={s.eyebrow}>The long game, thoughtfully automated</span><h2>Not ready today.<br />Not forgotten tomorrow.</h2><p>Choose a nurture window. Scroll through the relationship, from first hello to a personal follow-up.</p><div className={s.pills} aria-label="Nurture window">{[30,60,90].map(days => <button key={days} type="button" aria-pressed={windowDays===days} onClick={() => setWindowDays(days)}>{days} days</button>)}</div></div>
    <div className={s.journeyGrid}><div className={s.journeySteps}>{steps.map((step,i) => <article id={`mortgage-step-${i}`} key={i} data-step={i} data-active={active===i} className={s.journeyStep}><span className={s.eyebrow}>{step.time}</span><h3>{step.title}</h3><p>{step.body}</p><span className={s.stepLabel}>{String(i+1).padStart(2,'0')} / 04</span></article>)}</div>
      <div className={s.stickyPreview}><div className={s.workspaceHeader}><span>Mortgage workspace</span><span className={s.exampleTag}>Illustrative preview</span></div><div className={s.contact}><span className={s.avatar}>JD</span><div><strong>Jordan Davis</strong><p>Example contact · Home purchase</p></div></div><div className={s.status}><span>Pipeline stage</span><strong>{current.status}</strong></div><div className={s.message} key={active}><span className={s.eyebrow}>{current.channel}</span><p>{current.message}</p></div><div className={s.nextAction}><span className={s.eyebrow}>Next action</span><p>{current.next}</p></div><div className={s.progressNav} aria-label="Journey steps">{steps.map((step,i)=><a key={i} href={`#mortgage-step-${i}`} aria-label={`View step ${i+1}: ${step.channel}`} aria-current={active===i?'step':undefined} onClick={event=>{if(matchMedia('(max-width: 760px)').matches) event.preventDefault();setActive(i)}}><span /></a>)}</div><p className={s.note}>Workflow example, not a live account. Timing is configurable; eligibility is reviewed by your licensed team.</p></div>
    </div>
  </section>
}
