import './StatsSection.css'

const stats = [
  { value: '5', label: 'podiums' },
  { value: '7', label: 'awards', featured: true },
  { value: '6', label: 'competitions' },
]

const StatsSection = () => {
  return (
    <section className="stats" id="stats" aria-labelledby="stats-title">
      <div className="stats__inner">
        <header className="stats__header">
          <p className="stats__eyebrow">Since 2021</p>
          <h2 className="stats__title" id="stats-title">
            Competition Highlights
          </h2>
          <p className="stats__description">
            Every build season we design, fabricate, and fly platforms that place on national and
            international podiums. These quick stats capture how our multidisciplinary team is
            progressing.
          </p>
        </header>

        <div className="stats__grid" role="list">
          {stats.map(stat => (
            <article
              key={stat.label}
              className={`stats__item${stat.featured ? ' stats__item--featured' : ''}`}
              role="listitem"
            >
              <span className="stats__value">{stat.value}</span>
              <span className="stats__label">{stat.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
