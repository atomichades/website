import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, UsersRound, PoundSterling, TrendingUp, Banknote, LayoutGrid } from 'lucide-react'

const stats = [
  {
    value: 150, prefix: '', suffix: '+',
    label: 'Engineers Led',
    desc: 'Built engineering organisations from greenfield — 4 to 150+ people — with full ownership of hiring, standards, and ways of working.',
    icon: Users, color: '#818cf8',
  },
  {
    value: 150, prefix: '', suffix: 'K+',
    label: 'Users Supported',
    desc: 'Production platforms built and led across defence and government, supporting more than 150,000 active users.',
    icon: UsersRound, color: '#06b6d4',
  },
  {
    value: 205, prefix: '~£', suffix: 'M',
    label: 'Value Delivered',
    desc: 'Independently assessed forecast value over five years, based on the RAF Software Factory\'s delivery record and projected operational impact.',
    icon: PoundSterling, color: '#34d399',
  },
  {
    value: 5.2, prefix: '', suffix: '×',
    label: 'ROI Achieved',
    desc: 'Return on investment across the RAF Software Factory, independently assessed against the programme\'s total investment and forecast value.',
    icon: TrendingUp, color: '#f472b6',
  },
  {
    value: 70, prefix: '£', suffix: 'M+',
    label: 'Funding Secured',
    desc: 'Secured from the Ministry of Defence for the RAF Software Factory through a technology strategy and business case that demonstrated 5.2× ROI.',
    icon: Banknote, color: '#fb923c',
  },
  {
    value: 30, prefix: '', suffix: '+',
    label: 'Systems Delivered',
    desc: 'Production systems shipped at the RAF Software Factory — including 9 in the first 9 months — covering HR, GenAI, targeting, and mobile platforms.',
    icon: LayoutGrid, color: '#a78bfa',
  },
]

function Counter({ target, prefix, suffix, run }: {
  target: number; prefix: string; suffix: string; run: boolean
}) {
  const [val, setVal] = useState(0)
  const isDecimal = target % 1 !== 0

  useEffect(() => {
    if (!run) return
    const dur = 1800
    let t0: number | null = null
    const tick = (ts: number) => {
      if (!t0) t0 = ts
      const p    = Math.min((ts - t0) / dur, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      setVal(ease * target)
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [run, target])

  const display = isDecimal ? val.toFixed(1) : String(Math.floor(val))
  return <>{prefix}{display}{suffix}</>
}

const grid = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } }
const card = {
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

export default function Achievements() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section" id="achievements">
      <div className="container">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          viewport={{ once: true }}
        >
          <span className="section__label">Delivery Record</span>
          <h2 className="section__title">Selected Outcomes</h2>
          <p className="section__subtitle">
            Key metrics from the RAF Software Factory programme, independently assessed.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="stats-grid"
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {stats.map(s => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.label}
                className="stat-card"
                variants={card}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="stat-card__icon" style={{ color: s.color, background: `${s.color}18` }}>
                  <Icon size={22} />
                </div>
                <div className="stat-card__num grad">
                  <Counter target={s.value} prefix={s.prefix} suffix={s.suffix} run={inView} />
                </div>
                <h3 className="stat-card__label">{s.label}</h3>
                <p className="stat-card__desc">{s.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
