import backgroundImage from '../../figma_ss/first page/Page 2.png'
import './StatsSection.css'

const stats = [
  { value: '6', label: 'podiums' },
  { value: '7', label: 'awards', featured: true },
  { value: '10', label: 'competitions' },
]

const StatsSection = () => {
  return (
    <section
      className="stats"
      id="stats"
      style={{ '--stats-background-image': `url(${backgroundImage})` }}
    >
      <div className="stats__overlay" />
        <div className="stats__grid">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className={`stats__item${stat.featured ? ' stats__item--featured' : ''}`}
            >
              <span className="stats__value">{stat.value}</span>
              <span className="stats__label">{stat.label}</span>
            </article>
          ))}
        </div>
      <p className="stats__caption">Statistics since 2021</p>
    </section>
  )
}

export default StatsSection
