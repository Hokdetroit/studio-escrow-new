'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { ArrowDown, ArrowUpRight, Pause, Play } from 'lucide-react'
import { features, logoUrl } from './feature-data'
import s from './features.module.css'

export function FeatureIcon({ index, className = '' }: { index: number; className?: string }) {
  return <span aria-hidden="true" className={`${s.artIcon} ${className}`} style={{ backgroundPosition: `${(index % 3) * 50}% ${Math.floor(index / 3) * 100}%` }} />
}
const orbit = [features[0], features[1], features[4], features[2], features[3], features[22], features[5], features[14]]
const positions = [[-430,-230,-10],[-160,-290,6],[230,-270,-6],[450,-90,9],[365,195,-7],[65,285,8],[-255,240,-8],[-455,40,6]]

export function FeatureUniverse() {
  const root = useRef<HTMLElement>(null)
  const [paused,setPaused] = useState(false)
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce), (max-width: 760px)')
    let frame = 0
    const update = () => {
      frame = 0
      if (!root.current) return
      const rect = root.current.getBoundingClientRect()
      const progress = paused || media.matches ? 0 : Math.max(0,Math.min(1,-rect.top/(rect.height-window.innerHeight)))
      root.current.style.setProperty('--flight',String(progress))
    }
    const scroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll',scroll,{passive:true})
    window.addEventListener('resize',scroll)
    media.addEventListener('change',scroll)
    return () => { cancelAnimationFrame(frame);window.removeEventListener('scroll',scroll);window.removeEventListener('resize',scroll);media.removeEventListener('change',scroll) }
  },[paused])
  return <section ref={root} className={s.flight} aria-label="Explore the Studio Escrow feature universe">
    <div className={s.flightStage}>
      <div className={s.flightTop}><span>STUDIO ESCROW / THE PLATFORM</span><button onClick={()=>setPaused(!paused)} aria-pressed={paused}>{paused ? <Play size={14}/> : <Pause size={14}/>} {paused ? 'Resume depth' : 'Pause depth'}</button></div>
      <div className={s.orbit} aria-hidden="true">{orbit.map((f,i)=><div key={f.id} className={s.orbitCard} style={{'--x':`${positions[i][0]}px`,'--y':`${positions[i][1]}px`,'--r':`${positions[i][2]}deg`,'--depth':i%2 ? 230 : 120} as CSSProperties}><FeatureIcon index={f.icon}/><span>{f.title}</span><ArrowUpRight size={15}/></div>)}<div className={`${s.brandFloat} ${s.brandOne}`}><img src={logoUrl('stripe')} alt="" width={36} height={36}/></div><div className={`${s.brandFloat} ${s.brandTwo}`}><img src={logoUrl('claude')} alt="" width={36} height={36}/></div></div>
      <div className={s.heroCopy}><span className={s.eyebrow}>A whole universe. One workspace.</span><h1>Less friction.<br/><span>More possibility.</span></h1><p>Every conversation, workflow and next big idea.<br className={s.desktopBreak}/> Finally, working together.</p><a href="#feature-explorer" className={s.primary}>Explore your possibilities <ArrowDown size={17}/></a><span className={s.micro}>Built around your business. Not the other way around.</span></div>
      <div className={s.flightBottom}><span>CRM · MARKETING · AI · AUTOMATION</span><a href="#feature-explorer">Scroll to explore <ArrowDown size={16}/></a></div>
    </div>
  </section>
}
