import React from 'react'

export const NotesAppBar = () => {
    return (
        <div className="notes__appbar">
            <span>28 de agosto 2020</span>

            <input 
                id="fileSelector"
                type="file"
                name="file"
                style={{ display: 'none' }}
                // onChange={ handleFileChange }
            />

            <div>
                <button 
                    className="btn"
                    // onClick={ handlePictureClick }
                >
                    Picture
                </button>

                <button 
                    className="btn"
                    // onClick={ handleSave }
                >
                    Save
                </button>
            </div>
        </div>
    )
}
