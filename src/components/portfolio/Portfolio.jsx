import React from 'react'
import './portfolio.css'
import IMG1 from '../../asset/portfolio1.jpg'
import IMG2 from '../../asset/portfolio2.jpg'
import IMG3 from '../../asset/portfolio3.jpg'
import IMG4 from '../../asset/portfolio4.jpg'
import IMG5 from '../../asset/portfolio5.png'
import IMG6 from '../../asset/portfolio6.jpg'

//DO NOT USE THE IMAGE IN PRODUCTION

const data = [
  {
    id:1,
    image:IMG1,
    title:'Crypto Currency Dashboard & Financial Visualization',
    github:'https://github.com/vikasbeginofera',
    demo:'https://dribbble.com/shots/16673715'
  },
  {
    id:2,
    image:IMG2,
    title:'Charts templates & infographics in Figma',
    github:'https://github.com/vikasbeginofera',
    demo:'https://dribbble.com/shots/16580766'
  },
  {
    id:3,
    image:IMG3,
    title:'Figma dashboard UI kit for data design web apps',
    github:'https://github.com/vikasbeginofera',
    demo:'https://dribbble.com/shots/17290917'
  },
  {
    id:4,
    image:IMG4,
    title:'Maintaining tasks and tracking progress',
    github:'https://github.com/vikasbeginofera',
    demo:'https://dribbble.com/shots/16955822'
  },
  {
    id:5,
    image:IMG5,
    title:'Charts templates & infographics in Figma',
    github:'https://github.com/vikasbeginofera',
    demo:'https://dribbble.com/shots/16541289'
  },
  {
    id:6,
    image:IMG6,
    title:'Charts templates & infographics in Figma',
    github:'https://github.com/vikasbeginofera',
    demo:'https://dribbble.com/shots/15887665'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo})=>{
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section >
  )
}

export default Portfolio