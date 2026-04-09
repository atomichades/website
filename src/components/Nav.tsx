import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'Outcomes',   href: '#achievements' },
  { label: 'Experience', href: '#work' },
  { label: 'About',      href: '#about' },
  { label: 'Contact',    href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`nav${scrolled ? ' nav--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav__inner">
        <a href="#" className="nav__logo">JP</a>

        <ul className="nav__links">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="nav__link">{l.label}</a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn btn--outline btn--sm">Get in touch</a>
      </div>
    </motion.nav>
  )
}
