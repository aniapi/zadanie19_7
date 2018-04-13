// tworzenie komentarza
const ADD_COMMENT = 'ADD_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: commentId
    }
}

// edycja komentarza
const EDIT_COMMENT = 'EDIT_COMMENT';

function editComment(text) {
    return {
        type: EDIT_COMMENT,
        text,
        id: commentId
    }
}

// usuwanie komentarza
const REMOVE_COMMENT = 'REMOVE_COMMENT';

function removeComment() {
    return {
        type: REMOVE_COMMENT,
        id: commentId
    }
}

// ocenianie w górę
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';

function thumbUpComment(commentId) {
    return {
        type: THUMB_UP_COMMENT,
        id: commentId
    }
}

// ocenianie w dół
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function thumbDownComment(commentId) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: commentId
    }
}

export ADD_COMMENT;
export REMOVE_COMMENT;
export EDIT_COMMENT;
export THUMB_UP_COMMENT;
export THUMB_DOWN_COMMENT;

export addComment;
export removeComment;
export editComment;
export thumbUpComment;
export thumbDownComment;