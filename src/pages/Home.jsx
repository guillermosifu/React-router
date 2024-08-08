import React from 'react'
import Logo from "../assets/logo.png"

const Home = () => {
  return (
    <div className='wraper'>
      <section className='home'>
        <figure>
          <img src={Logo} alt="" />
        </figure>
        <article>
        <p>Lorem ipsum dolor sit amet consectetur
           adipisicing elit. Quis vitae, blanditiis ea dolores quaerat doloremque saepe consequatur autem vel molestiae tempora eveniet, fugiat facilis labore odit ullam officiis non. Error.</p>
        </article>
      </section>
    </div>
  )
}

export default Home
