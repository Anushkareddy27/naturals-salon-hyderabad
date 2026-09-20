import { ArrowRight, Check, ChevronDown } from 'lucide-react';
import { Link } from 'wouter';
import { useEffect, useState } from 'react';

function Meta({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]') ?? document.createElement('meta');
    meta.setAttribute('name', 'description'); meta.setAttribute('content', description); document.head.appendChild(meta);
    const og = document.querySelector('meta[property="og:description"]') ?? document.createElement('meta');
    og.setAttribute('property', 'og:description'); og.setAttribute('content', description); document.head.appendChild(og);
    const ogTitle = document.querySelector('meta[property="og:title"]') ?? document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title'); ogTitle.setAttribute('content', title); document.head.appendChild(ogTitle);
  }, [description, title]);
  return null;
}

const highlights = [
  ['01', 'A considered reset', 'Time to arrive, talk through what you want, and leave feeling like yourself—only more polished.'],
  ['02', 'For every kind of day', 'From a quick grooming refresh to a full bridal beauty plan, your visit starts with listening.'],
  ['03', 'Hyderabad, made personal', 'A warm local salon experience, shaped for the pace, style, and spirit of Hyderabad.'],
];

export default function Home() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  return (
    <>
      <Meta title="Naturals Salon & Spa Hyderabad | Beauty, made personal" description="Naturals Salon & Spa Hyderabad offers considered hair, beauty, grooming, skincare, and bridal services in Hyderabad, Telangana, India." />
      <main>
        <section className="relative isolate min-h-[680px] overflow-hidden bg-primary text-primary-foreground">
          <img src="/hero-salon.jpg" alt="Sunlit salon interior at Naturals Salon and Spa" className="hero-image absolute inset-0 -z-20 size-full object-cover object-center opacity-45" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-primary/75 to-primary/15" />
          <div className="section-shell flex min-h-[680px] items-end pb-16 pt-28 md:items-center md:pb-20">
            <div className="max-w-2xl">
              <p className="eyebrow animate-rise !text-accent">Naturals Salon &amp; Spa · Hyderabad</p>
              <h1 className="font-display animate-rise animate-rise-delay-1 mt-5 text-5xl leading-[.98] tracking-[-.03em] text-balance md:text-7xl">Come in as you are.<br /><em>Leave feeling renewed.</em></h1>
              <p className="animate-rise animate-rise-delay-2 mt-7 max-w-lg text-base leading-7 text-primary-foreground/78 md:text-lg">Thoughtful hair, beauty, grooming, skincare, and bridal services for the people of Hyderabad, Telangana, India.</p>
              <div className="animate-rise animate-rise-delay-3 mt-9 flex flex-wrap gap-3">
                <Link href="/contact" data-testid="link-hero-book" className="inline-flex items-center gap-3 rounded-full bg-accent px-6 py-4 text-xs font-bold uppercase tracking-[.12em] text-accent-foreground transition-transform hover:-translate-y-1">Book a visit <ArrowRight size={16} /></Link>
                <Link href="/services" data-testid="link-hero-services" className="inline-flex items-center gap-3 rounded-full border border-primary-foreground/35 px-6 py-4 text-xs font-bold uppercase tracking-[.12em] text-primary-foreground transition-colors hover:border-accent hover:text-accent">Explore services</Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-xs uppercase tracking-[.18em] text-primary-foreground/60 md:flex"><span className="h-px w-10 bg-primary-foreground/50" />A beauty ritual, reimagined</div>
        </section>

        <section className="section-shell grid gap-8 py-20 md:grid-cols-[.75fr_1.25fr] md:py-28">
          <div>
            <p className="eyebrow">The Naturals feeling</p>
            <h2 className="font-display mt-4 max-w-sm text-4xl leading-tight text-primary md:text-5xl">It starts with a little more care.</h2>
          </div>
          <div className="grid gap-0 border-t border-border md:grid-cols-3 md:border-l md:border-t-0">
            {highlights.map(([number, title, body]) => (
              <article key={number} className="border-b border-border py-6 md:border-b-0 md:border-r md:px-6 md:first:pl-8">
                <span className="text-xs font-bold tracking-[.16em] text-accent">{number}</span>
                <h3 className="mt-10 text-lg font-semibold text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-secondary/60 py-20 md:py-28">
          <div className="section-shell grid items-center gap-12 md:grid-cols-[.92fr_1.08fr]">
            <div className="overflow-hidden rounded-[140px_140px_20px_20px] bg-muted">
              <img src="/ritual-detail.jpg" alt="Skincare products prepared for a salon ritual" className="aspect-[4/5] size-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <div className="md:pl-8">
              <p className="eyebrow">Your time, well spent</p>
              <h2 className="font-display mt-4 text-4xl leading-tight text-primary md:text-6xl">Beauty is not a rush job.</h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-muted-foreground">We believe the best results come from a proper conversation, considered recommendations, and the small details that make a service feel truly yours.</p>
              <ul className="mt-8 space-y-4 text-sm text-primary">
                {['A warm welcome, every time', 'Consultation before the first touch', 'A calm space to reset your pace'].map((item) => <li key={item} className="flex items-center gap-3"><span className="grid size-6 place-items-center rounded-full bg-accent/25 text-primary"><Check size={14} /></span>{item}</li>)}
              </ul>
              <Link href="/about" data-testid="link-home-story" className="mt-9 inline-flex items-center gap-2 border-b border-primary pb-2 text-sm font-bold text-primary transition-colors hover:border-accent hover:text-accent">Get to know us <ArrowRight size={15} /></Link>
            </div>
          </div>
        </section>

        <section className="section-shell py-20 md:py-28">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div><p className="eyebrow">Made for your moment</p><h2 className="font-display mt-4 text-4xl text-primary md:text-5xl">The right kind of care.</h2></div>
            <Link href="/services" data-testid="link-home-all-services" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-accent">View all services <ArrowRight size={16} /></Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { title: 'Hair, with intention', copy: 'Cuts, colour, styling, and care that work with your natural rhythm.', tag: 'Hair' },
              { title: 'Skin in its best light', copy: 'Facials and rituals to leave your skin feeling looked after.', tag: 'Skincare' },
              { title: 'Your big-day calm', copy: 'Bridal beauty planning that makes space for the celebration.', tag: 'Bridal' },
            ].map((item, i) => <Link href="/services" data-testid={`card-service-${i}`} key={item.title} className="group relative min-h-[270px] overflow-hidden rounded-2xl bg-primary p-7 text-primary-foreground transition-transform hover:-translate-y-1">
              <span className="eyebrow !text-accent">{item.tag}</span><h3 className="font-display mt-20 max-w-[220px] text-3xl leading-tight">{item.title}</h3><p className="absolute bottom-7 left-7 right-7 text-sm leading-6 text-primary-foreground/65">{item.copy}</p><ArrowRight size={20} className="absolute right-7 top-7 text-accent transition-transform group-hover:translate-x-1" />
            </Link>)}
          </div>
        </section>

        <section className="bg-primary py-20 text-primary-foreground md:py-24">
          <div className="section-shell grid gap-12 md:grid-cols-[1fr_.8fr]">
            <div><p className="eyebrow !text-accent">Plan your visit</p><h2 className="font-display mt-4 max-w-xl text-4xl leading-tight md:text-6xl">A small step toward feeling like yourself.</h2><Link href="/contact" data-testid="link-home-appointment" className="mt-8 inline-flex items-center gap-3 rounded-full bg-accent px-6 py-4 text-xs font-bold uppercase tracking-widest text-accent-foreground">Start a conversation <ArrowRight size={16} /></Link></div>
            <div className="border-t border-primary-foreground/20 pt-4">
              {[['01', 'Tell us what you have in mind', 'A quick note helps us prepare for you.'], ['02', 'Choose a time that feels right', 'We will help you take the next step.'], ['03', 'Arrive. Exhale. Begin.', 'Your reset starts at the door.']].map(([n, title, copy]) => <div key={n} className="flex gap-5 border-b border-primary-foreground/20 py-5"><span className="text-xs font-bold text-accent">{n}</span><div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm text-primary-foreground/60">{copy}</p></div></div>)}
            </div>
          </div>
        </section>

        <section className="section-shell py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow">Good to know</p><h2 className="font-display mt-4 text-4xl text-primary">Before you visit.</h2></div><div className="border-t border-border">{[['Do I need an appointment?', 'Appointments are recommended so we can give your visit the attention it deserves. Use our contact form and we will help with the next step.'], ['Do you welcome both women and men?', 'Yes. Naturals Salon & Spa is a welcoming beauty destination for women and men across hair, grooming, skincare, and beauty services.'], ['Can I enquire about bridal services?', 'Absolutely. Share your date or celebration plans through our contact form and our team can start the conversation.']].map(([q, a], i) => <div key={q} className="border-b border-border"><button type="button" data-testid={`button-faq-${i}`} className="flex w-full items-center justify-between gap-5 py-5 text-left font-semibold text-primary" onClick={() => setFaqOpen(faqOpen === i ? null : i)}>{q}<ChevronDown size={18} className={`shrink-0 transition-transform ${faqOpen === i ? 'rotate-180 text-accent' : ''}`} /></button>{faqOpen === i && <p className="max-w-2xl pb-6 pr-10 text-sm leading-7 text-muted-foreground">{a}</p>}</div>)}</div></div>
        </section>
      </main>
    </>
  );
}