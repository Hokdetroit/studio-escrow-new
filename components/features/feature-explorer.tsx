'use client'

import { useState } from 'react'
import { ArrowUpRight, Search, Check, ArrowRight } from 'lucide-react'
import { categories, features, type Category } from './feature-data'
import { FeatureIcon } from './feature-universe'
import s from './features.module.css'

export function FeatureExplorer() {
  const [category,setCategory] = useState<Category>('All features')
  const [search,setSearch] = useState('')
  const [selected,setSelected] = useState('crm')
  const filtered = features.filter(f=>(category==='All features'||f.category===category)&&`${f.title} ${f.summary} ${f.solution}`.toLowerCase().includes(search.toLowerCase()))
  const current = filtered.find(f=>f.id===selected) ?? filtered[0]
  return <section id="feature-explorer" className={s.explorer}>
    <div className={s.sectionIntro}><div><span className={s.eyebrow}>Your business, connected</span><h2>Big capabilities.<br/><span>Real-world possibilities.</span></h2></div><p>Start with what is slowing you down.<br/>Find the feature that moves you forward.</p></div>
    <div className={s.toolbar}><div className={s.filters} aria-label="Filter features">{categories.map(c=><button key={c} onClick={()=>setCategory(c)} aria-pressed={category===c}>{c}</button>)}</div><label className={s.search}><Search size={18}/><span className={s.srOnly}>Search features</span><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Find a capability…" type="search"/></label></div>
    <div className={s.count} aria-live="polite">{filtered.length} capabilities to explore · Select a feature to see it in action</div>
    <div className={s.explorerLayout}><div className={s.featureGrid}>{filtered.map(f=><button className={s.featureCard} key={f.id} onClick={()=>{setSelected(f.id);if(window.matchMedia('(max-width: 760px)').matches)requestAnimationFrame(()=>document.getElementById('feature-story')?.scrollIntoView({block:'start',behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'}))}} aria-pressed={current?.id===f.id} aria-controls="feature-story"><div className={s.cardTop}><FeatureIcon index={f.icon}/><ArrowUpRight size={19}/></div><span className={s.cardCategory}>{f.category}</span><strong>{f.title}</strong><span>{f.summary}</span></button>)}{!filtered.length&&<div className={s.empty}><h3>No matches yet.</h3><p>Try another term or browse the complete platform.</p><button onClick={()=>{setSearch('');setCategory('All features')}}>Show all features</button></div>}</div>
    {current&&<aside id="feature-story" className={s.featureStory} aria-live="polite" aria-atomic="true"><div className={s.storyHead}><span className={s.eyebrow}>A closer look</span><FeatureIcon index={current.icon}/></div><h3>{current.title}</h3><div><span className={s.storyLabel}>The friction</span><p>{current.problem}</p></div><div><span className={s.storyLabel}><Check size={15}/> The possibility</span><p>{current.solution}</p></div><div className={s.example}><span className={s.storyLabel}>In your day-to-day</span><p>{current.example}</p></div><a href="/schedule-demo">See how it fits your business <ArrowRight size={16}/></a></aside>}</div>
    <p className={s.note}>Features, usage allowances and availability vary by plan, provider and implementation. Custom applications are scoped separately. <a href="/pricing">Compare plans →</a></p>
  </section>
}
