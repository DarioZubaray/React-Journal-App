import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">

                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    name="title"
                    // value={ title }
                    // onChange={ handleInputChange }
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    name="body"
                    // value={ body }
                    // onChange={ handleInputChange }
                ></textarea>

                <div className="notes__image">
                    <img 
                        src={ 'https://www.w3schools.com/howto/img_forest.jpg' }
                        alt="imagen"
                    />
                </div>
                {/* {
                    (note.url) 
                    && (
                        <div className="notes__image">
                            <img 
                                src={ note.url }
                                alt="imagen"
                            />
                        </div>
                    )
                } */}


                </div>


            <button 
                className="btn btn-danger"
                // onClick={ handleDelete }
            >
                Delete
            </button>

        </div>
    )
}
