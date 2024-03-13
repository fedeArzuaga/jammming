import { useState } from 'react'

export const useForm = () => {

    const [ inputState, setInputState ] = useState("")

    const handleChange = event => {
        const { target } = event
        setInputState( target.value )
    }

    return {
        inputState,
        handleChange
    }
}
