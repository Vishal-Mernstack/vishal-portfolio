import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { skills } from '../../data/portfolio';
import './Skills.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  }),
};

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="section skills" ref={ref}>
      <div className="container">
        <motion.div className="section-tag" variants={fadeUp} custom={0} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          Skills
        </motion.div>
        <motion.h2 className="section-title" variants={fadeUp} custom={1} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          Technical expertise
        </motion.h2>
        <motion.p className="section-subtitle" variants={fadeUp} custom={2} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          A broad toolkit built over years of production experience across the full stack.
        </motion.p>

        {/* Tab navigation */}
        <motion.div className="skills__tabs" variants={fadeUp} custom={3} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          {skills.map(({ category, icon }, i) => (
            <button
              key={category}
              className={`skills__tab ${activeTab === i ? 'skills__tab--active' : ''}`}
              onClick={() => setActiveTab(i)}
            >
              <span>{icon}</span> {category}
            </button>
          ))}
        </motion.div>

        {/* Skills grid — show all categories, highlight active */}
        <div className="skills__grid">
          {skills.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              className={`skill-category glass-card ${activeTab === catIdx ? 'skill-category--active' : ''}`}
              variants={fadeUp}
              custom={catIdx + 4}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              onClick={() => setActiveTab(catIdx)}
            >
              <div className="skill-category__header">
                <span className="skill-category__icon">{cat.icon}</span>
                <h3 className="skill-category__name">{cat.category}</h3>
              </div>
              <div className="skill-list">
                {cat.items.map(({ name, level }, i) => (
                  <div key={name} className="skill-item">
                    <div className="skill-item__meta">
                      <span className="skill-name">{name}</span>
                      <span className="skill-pct">{level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-bar__fill"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${level}%` } : { width: 0 }}
                        transition={{ delay: 0.4 + catIdx * 0.1 + i * 0.07, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
