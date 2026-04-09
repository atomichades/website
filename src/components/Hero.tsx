import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

function fadeUp(delay: number) {
  return {
    initial:    { opacity: 0, y: 28 },
    animate:    { opacity: 1, y: 0 },
    transition: { duration: 0.75, ease, delay },
  }
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__grid" />
      </div>

      <div className="hero__content">
        <motion.div className="hero__badge" {...fadeUp(0.25)}>
          MBE &nbsp;·&nbsp; MSc &nbsp;·&nbsp; CEng &nbsp;·&nbsp; MIET
        </motion.div>

        <motion.h1 className="hero__name grad" {...fadeUp(0.35)}>
          James Palfrey
        </motion.h1>

        <motion.p className="hero__role" {...fadeUp(0.45)}>
          Technology Strategy &amp; AI &nbsp;·&nbsp; Software Engineering &nbsp;·&nbsp; Defence &amp; Government
        </motion.p>

        <motion.p className="hero__tagline" {...fadeUp(0.52)}>
          Founder of the RAF Software Factory — 150+ engineers, £205M value delivered.
          Now leading AI systems strategy and digital targeting architecture across MOD and No.10.
        </motion.p>

        <motion.div className="hero__stats" {...fadeUp(0.58)}>
          <div className="hero__stat">
            <span className="hero__stat-num grad">150+</span>
            <span className="hero__stat-label">Engineers Led</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num grad">~£205M</span>
            <span className="hero__stat-label">Value Delivered</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num grad">5.2×</span>
            <span className="hero__stat-label">ROI Achieved</span>
          </div>
        </motion.div>

        <motion.div className="hero__actions" {...fadeUp(0.66)}>
          <a href="#achievements" className="btn btn--primary">View Track Record</a>
          <a href="#contact"      className="btn btn--ghost">Get in Touch</a>
        </motion.div>
      </div>

      <motion.a
        href="#achievements"
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  )
}
