import { motion } from 'framer-motion'
import { Link2, ArrowUpRight } from 'lucide-react'

export default function Contact() {
  return (
    <section className="section section--alt" id="contact">
      <div className="container">
        <motion.div
          className="contact-wrap"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          viewport={{ once: true }}
        >
          <div className="contact-wrap__glow" />

          <div className="contact-inner">
            <span className="section__label">Contact</span>

            <h2 className="contact__title">
              Get in <span className="grad">touch</span>
            </h2>

            <p className="contact__sub">
              Available for advisory, board, and select consulting engagements across AI, defence technology, and large-scale engineering programmes. Also open to academic collaboration — particularly research at the intersection of AI, assurance, and operational decision-making.
            </p>

            <a
              href="https://linkedin.com/in/james-palfrey"
              className="btn btn--primary btn--lg"
              target="_blank"
              rel="noreferrer"
            >
              <Link2 size={17} />
              Connect on LinkedIn
              <ArrowUpRight size={15} />
            </a>
          </div>
        </motion.div>
      </div>

      <footer className="footer">
        © {new Date().getFullYear()} James Palfrey MBE MSc CEng MIET
      </footer>
    </section>
  )
}
