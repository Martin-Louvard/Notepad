import React from 'react';
import Showdown from 'showdown';
const NoteDisplay = (props) => {
    const converter = new Showdown.Converter();
    const [noteDisplayValue, setNoteDisplayValue] = React.useState('')

    const content = (element) => {
        setNoteDisplayValue(converter.makeHtml(element))
    }

    function createMarkup() {
        return { __html: noteDisplayValue };
    }

    React.useEffect(
        () => {
            content(props.value)
        },
        [props.value]
    )

    React.useEffect(
        () => {
            createMarkup()
        },
        [noteDisplayValue]
    )

    return (
        <>  <h1>{props.title}</h1>
            <div dangerouslySetInnerHTML={createMarkup()} />
        </>
    )


};
export default NoteDisplay;
