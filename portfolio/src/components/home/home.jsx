import React, { useEffect, useState } from 'react';
import style from './home.module.css'
import profile from '../../imgs/profile.jpg'

const Home = ({setScrollY}) => {  

  const Contact = () => {
    // console.log(window.pageYOffset)
    setScrollY(3658)
  }  

  return (
    <section className={style.home}>
      <div className={style.container}>
        <img src={profile} alt="profile" className={style.avatar} />
        <h1 className={style.title}>Hello <br />I'm Donghyeon</h1>
        <h2 className={style.description}>
          프론트에 관심이 많은 백엔드 엔지니어
        </h2>
        <button className={style.contact} onClick={Contact}>
          Contact Me
        </button>
      </div>
    </section>
  )
}

export default Home;