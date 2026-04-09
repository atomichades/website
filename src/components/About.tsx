import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const skills = [
  'Technology Strategy', 'Engineering Leadership',
  'AI Systems & Assurance', 'Platform Engineering',
  'Programme Delivery', 'Cloud Architecture',
  'AWS · GCP · Kubernetes', 'iOS · Android · Web',
  'Security (NIST 800-53)', 'AI / ML Integration',
  'Large-Scale Hiring', 'Ministerial Engagement',
]

const honours = [
  {
    title: 'MBE',
    note: 'Member of the Order of the British Empire — national honour awarded by His Majesty the King for services to defence digital and software engineering.',
  },
  {
    title: 'RAF Innovator of the Year',
    note: 'Astra Award for the most significant and impactful contribution to the RAF.',
  },
  {
    title: 'Deputy Commander Operations Commendation',
    note: '',
  },
  {
    title: 'Afghanistan Campaign Medal',
    note: 'Operational service medal for Op Herrick — two tours.',
  },
  {
    title: 'Service Medals',
    note: 'Diamond & Platinum Jubilee, Long Service & Good Conduct.',
  },
]

const publications = [
  {
    title: 'Systematic Review of AI in Lethal Processes',
    venue: 'Taylor & Francis',
    year: '2025',
    status: 'Peer Review in Progress',
  },
 
]

const articles = [
  {
    title: 'From Command to Code: How Military Levers of Power Shape Software Quality',
    venue: 'In preparation',
    year: '',
    status: 'In Progress'
  },
   {
    title: 'A Wartime Pragmatic Model for AI Integration',
    venue: 'Taylor & Francis',
    year: '2026',
    status: 'In Progress',
  },
]

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
          viewport={{ once: true }}
        >
          <span className="section__label">About</span>
          <h2 className="section__title">Background</h2>
        </motion.div>

        <div className="about-grid">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease }}
            viewport={{ once: true }}
          >
            <p className="about__text">
              Career began as an Infantry NCO in the Royal Air Force, including two operational tours of Afghanistan, before transitioning into software engineering and technology leadership. That arc — from front-line operations to C-suite technology roles — shapes a practical, outcomes-focused approach to both strategy and delivery.
            </p>
            <p className="about__text">
              Spent several years building the RAF's mobile and software engineering capability before founding the RAF Software Factory — a greenfield engineering organisation that grew from 4 to 150+ people and delivered £205M in independently assessed forecast value. Currently holds concurrent appointments at the Ministry of Defence and the No.10 Defence AI Taskforce, leading national AI and targeting programmes.
            </p>

            <div className="about__meta" style={{ marginBottom: '36px' }}>
              <div className="about__meta-item">
                <MapPin size={15} /><span>Wendover, England, United Kingdom</span>
              </div>
            </div>

            {/* Doctoral Research */}
            <div className="about__subsection">
              <p className="about__subsection-title">Doctoral Research</p>
              <p className="about__text" style={{ marginBottom: '4px' }}>
                PhD candidate at the <strong>University of York</strong>, School for Business &amp; Society.
              </p>
              <p className="about__text" style={{ marginBottom: '12px' }}>
                Research examines the impact of artificial intelligence on lethality-focused decision-making processes — specifically how AI systems are integrated into operational contexts where decisions carry irreversible consequences. The work seeks to develop frameworks for responsible AI integration where conventional assurance models are insufficient, drawing directly on experience designing and deploying AI systems within live defence programmes.
              </p>
              <p className="about__text" style={{ marginBottom: '20px' }}>
                Paxion is a technical demonstrator developed to support this research, built in partnership with the Ministry of Defence.
              </p>

              <p className="about__subsection-title" style={{ fontSize: '0.78rem', marginBottom: '12px' }}>Supervisors</p>
              <ul className="about__list" style={{ marginBottom: '20px' }}>
                <li className="about__list-item">
                  <span className="about__list-primary">Prof. Tyrone S. Pitsis</span>
                  <span className="about__list-secondary">
                    Professor of Strategic Projects, University of York · Expert in project-based organising, strategy and complexity · Former RAF ASTRA Expert Advisor
                  </span>
                </li>
                <li className="about__list-item">
                  <span className="about__list-primary">Prof. Philip Garnett</span>
                  <span className="about__list-secondary">
                    Professor, School for Business &amp; Society, University of York · Complexity theorist specialising in complex systems, AI applications, and organisational dynamics
                  </span>
                </li>
              </ul>

              <a
                href="https://paxion.appivate.mod.uk"
                target="_blank"
                rel="noreferrer"
                className="btn btn--outline btn--sm"
              >
                Find out more →
              </a>
            </div>

            {/* Academic Publications */}
            <div className="about__subsection">
              <p className="about__subsection-title">Academic Publications</p>
              <ul className="about__list">
                {publications.map(p => (
                  <li key={p.title} className="about__list-item">
                    <span className="about__list-primary">{p.title}</span>
                    <span className="about__list-secondary">
                      {p.venue} · {p.year}{p.status ? ` · ${p.status}` : ''}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Writing */}
            <div className="about__subsection">
              <p className="about__subsection-title">Writing</p>
              <ul className="about__list">
                {articles.map(a => (
                  <li key={a.title} className="about__list-item">
                    <span className="about__list-primary">{a.title}</span>
                    <span className="about__list-secondary">{a.venue}{a.year ? ` · ${a.year}` : ''}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            viewport={{ once: true }}
          >
            {/* Skills */}
            <div className="about__subsection">
              <p className="about__subsection-title">Technical &amp; Leadership Skills</p>
              <div className="skills-wrap">
                {skills.map((s, i) => (
                  <motion.span
                    key={s}
                    className="skill-pill"
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    viewport={{ once: true }}
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Honours */}
            <div className="about__subsection">
              <p className="about__subsection-title">Honours &amp; Awards</p>
              <ul className="about__list">
                {honours.map(h => (
                  <li key={h.title} className="about__list-item">
                    <span className="about__list-primary">{h.title}</span>
                    {h.note && <span className="about__list-secondary">{h.note}</span>}
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications */}
            <div className="about__subsection">
              <p className="about__subsection-title">Certifications</p>
              <ul className="about__cert-list">
                {[
                  'Chartered Engineer (CEng)',
                  'MIET — Institution of Engineering and Technology',
                  'AWS Solutions Architect Professional',
                  'AWS DevOps Engineer Professional',
                  'AWS Security Specialist',
                  'NIST 800-53 Practitioner',
                  'Terraform Associate',
                  'Professional Scrum Master II (PSM II)',
                  'Certified Android Developer',
                ].map(c => (
                  <li key={c} className="about__cert-item">{c}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
