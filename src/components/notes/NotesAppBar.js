import React from 'react'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUploading } from '../../actions/notes'

export const NotesAppBar = () => {

    const dispatch = useDispatch()
    const { active: activeNote } = useSelector(state => state.notes)
    const noteDate = moment( activeNote.date )

    const handleSave = () => {
        dispatch( startSaveNote( activeNote ) )
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click()
    }

    const handleFileChange = ( e ) => {
        const file = e.target.files[0]

        if ( file ) {
            dispatch( startUploading( file ) )
        }
    }

    return (
        <div className="notes__appbar">
            <span> { noteDate.format('LLL') } </span>

            <input 
                id="fileSelector"
                type="file"
                name="file"
                style={{ display: 'none' }}
                onChange={ handleFileChange }
            />

            <div>
                <button 
                    className="btn btn-border"
                    onClick={ handlePictureClick }
                >
                    Picture
                </button>

                <button 
                    className="btn btn-border"
                    onClick={ handleSave }
                >
                    Save
                </button>
            </div>
        </div>
    )
}
