import React from 'react'
import s from './Style.module.scss'
import SectionTitle from '../SectionTitle/SectionTitle'

const Style = () => {
  return (
    <>
    <div className={s.wrapper}>
        <div className='container'>
            <div className={s.box}>
                <SectionTitle>BROWSE BY DRESS STYLE</SectionTitle>
                <div className={s.cards}>
                    <div className={s.card1}>
                        <h2 className={s.title}>Casual</h2>
                    </div>
                    <div className={s.card2}>
                        <h2 className={s.title}>Formal</h2>
                    </div>
                    <div className={s.card3}>
                        <h2 className={s.title}>Party</h2>
                    </div>
                    <div className={s.card4}>
                        <h2 className={s.title}>Gym</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Style