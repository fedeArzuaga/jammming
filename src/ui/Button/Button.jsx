import React from 'react'
import styles from './Button.module.css'

export const Button = ({ eventHandler, children }) => {
    return (
        <button
            onClick={ eventHandler }
            className={ styles.tmBtn }
        >
            { children }
        </button>
    )
}
