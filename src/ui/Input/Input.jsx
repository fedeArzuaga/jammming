import React from 'react'
import styles from './Input.module.css'

const Input = ({ type, name, id, isRequired, value, eventHandler }) => {
    return (
        <>
            {
                type === "text"
                    ? (
                        <input
                            className={ styles.tmTextInput }
                            type={ type }
                            name={ name }
                            id={ id }
                            required={ isRequired }
                            value={ value }
                            onChange={ eventHandler }
                        />
                    ) : (
                        <input
                            type={ type }
                            value={ value }
                        />
                    )
            }
        </>
    )
}

export default Input