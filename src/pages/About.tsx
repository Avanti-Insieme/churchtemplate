import { Link } from 'react-router-dom'
import Data from '../../data.json';
import { Section } from '../types';

export default function About() {
  const data = Data.about;
  const body = data.body as Section[];

  return (
    <main data-screen-label="About">
      <section className="pagehero">
        <div className="wrap">
          <div className="crumb"><Link to="/">Home</Link><span className="sep">/</span><span>About</span></div>
          <span className="eyebrow">{data.pageHero.eyebrow}</span>
          <h1>{data.pageHero.h1}</h1>
          <p className="lead">{data.pageHero.leadParagraph}</p>
        </div>
      </section>

      <section className="section about">
        <div className="wrap about-grid">
          <div className="ph"><span className="cap">photo · community &amp; ministry life</span></div>
          <div>
            <span className="eyebrow">{body[0].eyebrow}</span>
            <h2 className="title">{body[0].title}</h2>
            <p className="lead">{body[0].leadParagraph}</p>
            {body[0].beliefs.length > 0 ?
              <div className="beliefs">
                {body[0].beliefs.map(b =>
                  <span className="pill">{b}</span>
                )}

              </div>
              : null
            }
            <Link className="btn btn-ghost" to={ body[0].cta.href }>{ body[0].cta.label } <span className="arrow">→</span></Link>
          </div>
        </div>
      </section>

      <section className="section visit" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head">
            <div className="left">
              <span className="eyebrow">What we believe</span>
              <h2 className="title">The convictions that shape us</h2>
            </div>
          </div>
          {body[1].steps && body[1].steps.length > 0 ?
            <div className="steps">
              {body[1].steps.map(step => 
                <>
                  <div className="step">
                  <div className="num">✦</div>
                  <h3>{step.heading}</h3>
                  <p>{step.paragraph}</p>
                </div>
                </>
              )}
            </div>
            : null
          }
        </div>
      </section>
    </main>
  )
}
