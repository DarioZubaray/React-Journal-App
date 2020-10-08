import React from 'react'
import moment from 'moment'

export const JournalEntry = () => {
    const url = 'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg'
    const title= 'Un nuevo dia'
    const body= 'bla bla bla bla bla bla bla bla'
    const noteDate= moment(new Date())

    return (
        <div className="journal__entry pointer">
            
            <div 
                    className="journal__entry-picture"
                    style={{
                        backgroundSize: 'cover',
                        backgroundImage: `url(${ url })`
                    }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    { title }
                </p>
                <p className="journal__entry-content">
                    { body }
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span> { noteDate.format('dddd') } </span>
                <h4> { noteDate.format('Do') } </h4>
            </div>
        </div>
    )
}