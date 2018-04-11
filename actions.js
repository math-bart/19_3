import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';


{
    type: ADD_COMMENT,
    text: 'My first comment !'
	id: 20,
	thumbState: 0
}

{
    type: REMOVE_COMMENT,
    id: 20
}

{
    type: EDIT_COMMENT,
    id: 20,
    text: 'wyedytowany tekst komentarza'
}

{
    type: THUMB_UP_COMMENT,
    id: 20,
    thumbState: 20
}

{
    type: THUMB_UP_COMMENT,
    id: 20,
    thumbState: 20
}

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4(),
		thumbState: 0
    }
}

function remComment(id) {
	return {
		type: REMOVE_COMMENT,
        id
    }
}

function editComment(id, text) {
	return {
        type: EDIT_COMMENT,
		id,
		text
    }
}

function thumbUpComment(id) {
	return {
		type: THUMB_UP_COMMENT,
        id,
		thumbState: thumbState + 1
    }
}

function thumbDownComment(id) {
	return {
		type: THUMB_DOWN_COMMENT,
        id,
		thumbState: thumbState + 1
    }
}

dispatch(addComment('nowy komentarz!'));
dispatch(remComment(3));
dispatch(editComment(5, 'zmień komentarz!'));
dispatch(thumbUpCommentt(8));
dispatch(thumbDownComment(8));
