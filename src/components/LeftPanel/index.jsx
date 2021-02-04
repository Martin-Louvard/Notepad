import React from 'react';
import NoteOverview from '../NoteOverview'
const LeftPanel = (props) => {
    
    const renderSave = () => {
        return JSON.parse(localStorage.getItem('blocnote'));
      }
      const [value, setValue] = React.useState(renderSave().value);
      const [title, setTitle] = React.useState(renderSave().title);

      React.useEffect(
        ()=>{
        setValue(props.value)
        setTitle(props.title)
        }, 
        [props.value, props.title]
      )

    return (
        <div className="col-2 border-right" style={{ height: "98vh" }}>
            <div className="btn btn-danger m-2">Ajouter une note</div>
            <div className="NoteOverview">
                <h1>{title}</h1>
                <p>{value}</p>

            </div>
        </div>
    )

};

export default LeftPanel