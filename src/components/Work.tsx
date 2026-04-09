import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const roles = [
  {
    period: 'Jan 2026 – Present',
    org: 'UK Ministry of Defence',
    badge: '£1bn programme',
    title: 'Head of Strategy & Delivery, Digital Targeting Web',
    desc: 'Senior technology and delivery lead for a national AI-driven targeting programme. A continuously evolving capability designed to deliver sustained improvements in targeting effectiveness — structured for central governance with decentralised delivery across multiple teams. Responsible for the end-to-end technology roadmap and direct engagement with ministers on investment, risk, and assurance. Presented at the Software-Defined Systems Conference (SDSC).',
    tags: ['National Security', 'Ministerial Engagement', 'AI Systems', 'Programme Delivery'],
    stripe: 'linear-gradient(90deg, #818cf8, #06b6d4)',
    link: null,
  },
  {
    period: 'Jan 2026 – Present',
    org: 'No.10 Defence AI Taskforce',
    badge: 'Concurrent appointment',
    title: 'Head of AI Systems & Assurance',
    desc: 'Brought in to consolidate fragmented AI programmes across MOD, Cabinet Office, and No.10 into a coherent, governable delivery model. The role addressed the gap between experimental AI and operational capability — building the assurance frameworks and governance structures needed to move systems from prototype to deployment safely, at pace, and with ministerial confidence.',
    tags: ['AI Governance', 'Assurance Frameworks', 'Cross-Government', 'No.10 / MOD'],
    stripe: 'linear-gradient(90deg, #06b6d4, #34d399)',
    link: null,
  },
  {
    period: 'Jun 2022 – Jan 2026',
    org: 'Royal Air Force — Appivate',
    badge: '5.2× ROI · £70M+ secured',
    title: 'Founder & CTO, RAF Software Factory',
    desc: 'Founded and built a greenfield engineering organisation from 4 to 150+ people, delivering 30+ production systems: HRHub (99.99999% availability, 69,000+ HR tickets, 550 production deployments); ChatJSP — the RAF\'s first GenAI tool, deployed to 28,000 users in 12 weeks on AWS Bedrock; and BALLISTIC, subsequently adopted by allied nations. Also delivered PassPoint (crown-owned access control) and ADAPT (commercial process automation). Founded the Defence Hackathon, scaling from a 2021 RAF event to an 80-person cross-defence programme. Launched the Digital Warfighter Course — a 12-week zero-to-hero Software Engineering accelerator for military personnel. Presented at AWS Public Sector (keynote) and the Avalon Australian International Airshow. Achieved ~£205M in independently assessed forecast value over 5 years (5.2× ROI).',
    tags: ['Engineering Leadership', 'Defence Tech', 'GenAI · AWS Bedrock', 'Cloud Native'],
    stripe: 'linear-gradient(90deg, #f472b6, #818cf8)',
    link: null,
  },
  {
    period: 'Aug 2020 – Jun 2022',
    org: 'Royal Air Force',
    badge: '34,000+ users',
    title: 'Technical Lead, Mobile Applications',
    desc: 'Built the RAF\'s in-house mobile engineering capability from scratch — from first hire to sustained delivery. Delivered 3 applications used by 34,000+ users. Held technical authority and set architectural direction while scaling the team and managing budgets from £250k to £4.5m.',
    tags: ['iOS & Android', 'AWS', 'Technical Leadership', 'Budget to £4.5m'],
    stripe: 'linear-gradient(90deg, #fb923c, #f472b6)',
    link: null,
  },
  {
    period: 'Personal Project',
    org: 'github.com/atomichades',
    badge: 'Android',
    title: 'ReDog',
    desc: 'A personal Android application for dog rehoming. Built and maintained independently to sustain active engineering practice — full-stack Android development with TDD, CI/CD, and version control throughout.',
    tags: ['Android', 'Java', 'TDD / CI/CD', 'Personal Project'],
    stripe: 'linear-gradient(90deg, #34d399, #06b6d4)',
    link: 'https://github.com/atomichades',
  },
]

const grid = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const card = {
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

export default function Work() {
  return (
    <section className="section section--alt" id="work">
      <div className="container">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          viewport={{ once: true }}
        >
          <span className="section__label">Experience</span>
          <h2 className="section__title">Selected Experience</h2>
          <p className="section__subtitle">
            Key roles and programmes. The first two appointments are held concurrently.
          </p>
        </motion.div>

        <motion.div
          className="work-grid"
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {roles.map(r => (
            <motion.div
              key={r.title}
              className="work-card"
              variants={card}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div className="work-card__stripe" style={{ background: r.stripe }} />
              <div className="work-card__body">
                <div className="work-card__meta">
                  <span className="work-card__year">{r.period}</span>
                  <span className="work-card__badge">{r.badge}</span>
                </div>
                <p className="work-card__org">{r.org}</p>
                <h3 className="work-card__title">{r.title}</h3>
                <p className="work-card__desc">{r.desc}</p>
                <div className="work-card__tags">
                  {r.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                {r.link && (
                  <a href={r.link} target="_blank" rel="noreferrer" className="work-card__link">
                    <ExternalLink size={13} />
                    View on GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
