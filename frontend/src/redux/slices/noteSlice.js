import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notes: [], // This will hold the list of notes
};

const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {

        addNote: (state, action) => {
            state.notes.push(action.payload);
        },


        editNote: (state, action) => {
            const { id, title, content, isPrivate, createdAt } = action.payload;
            const existingNote = state.notes.find(note => note.id === id);
            if (existingNote) {
                existingNote.title = title;
                existingNote.content = content;
                existingNote.isPrivate = isPrivate;
                existingNote.createdAt = createdAt;
            }
        },


        deleteNote: (state, action) => {
            state.notes = state.notes.filter(note => note.id !== action.payload.id);
        },


        setNotes: (state, action) => {
            state.notes = action.payload;
        }
    }
});

export const { addNote, editNote, deleteNote, setNotes } = noteSlice.actions;

export default noteSlice.reducer;
