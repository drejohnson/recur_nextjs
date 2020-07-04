import React from 'react'
import styles from './Month.module.css'

export default function Month({ date }) {
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <>
      <div className={styles.daysOfWeek}>
        {weekDays.map(label => (
          <span key={label}>{label}</span>
        ))}
      </div>
      <div>
        Month view
    </div>
    </>
  )
}