import React from 'react'
import { useParams } from 'react-router-dom'

const WordColor = () => {
    const params = useParams()
    console.log(params)

    return (
        <div
            style={{
                color: params.textColor || 'black',
                backgroundColor: params.backgroundColor || 'white',
                'textAlign': 'center',
            }}
        >
            The word is {params.word}
        </div>
    )
}

export default WordColor