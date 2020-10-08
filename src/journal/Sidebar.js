import React from 'react'
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {
    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span> luna </span>
                </h3>

                <button 
                    className="btn"
                    // onClick={ hanleLogout }
                >
                    Logout
                </button>
            </div>
            <div 
                className="journal__new-entry"
                // onClick={ handleAddNew }
            >
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">
                    New entry
                </p>
            </div>

            <JournalEntries /> 
        </aside>
    )
}
