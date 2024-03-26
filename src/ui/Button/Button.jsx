import React from 'react'
import styles from './Button.module.css'

export const Button = ({ eventHandler, customClasses, children }) => {
    return (
        <button
            onClick={ eventHandler }
            className={ `${styles.tmBtn} ${ customClasses && customClasses.join(" ") }` }
        >
            { children }
        </button>
    )
}
