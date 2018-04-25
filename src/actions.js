import uuid from 'uuid';
export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

// tworzenie komentarza

function addComment(text, id) {
    return {
        type: ADD_COMMENT,
        text: text,
        id: uuid.v4()
    }
}

// edycja komentarza

function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        text: text,
        id: id
    }
}

// usuwanie komentarza

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: id
    }
}

// ocenianie w górę

function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        id: id,   
    }
}

// ocenianie w dół

function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: id
    }
}

export {
    addComment, removeComment, editComment, thumbUpComment, thumbDownComment
}