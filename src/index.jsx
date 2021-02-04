import React from 'react';
import ReactDOM from 'react-dom';
import MarkdownInput from './components/MarkdownInput';
import NoteDisplay from './components/NoteDisplay';
import LeftPanel from './components/LeftPanel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css'


const App = () => {
    const renderSave = () => {
        return JSON.parse(localStorage.getItem('blocnote'));
      }
    const [inputValue, setInputValue] = React.useState(renderSave().value)
    const [inputTitle, setInputTitle] = React.useState(renderSave().title)


    const sendValue = (value) => {
        setInputValue(value)
    }

    const sendTitle= (title) => {
        setInputTitle(title)
    }

    React.useEffect(
        ()=>{
            renderSave();
            sendValue(inputValue);
            sendTitle(inputTitle);
        },
        []
    )


    return (
        <div className="row m-2">
            <LeftPanel value={inputValue} title={inputTitle} />
            <div className="  m-3 p-4 col-9 d-flex  flex-column" style={{ width: "80vw" }}>
                <div className=" p-4  mb-auto"><NoteDisplay value={inputValue} title={inputTitle} /></div>
                <div className="  p-4" style={{ height: "30vh" }}><MarkdownInput onChangeValue={sendValue} onChangeTitle={sendTitle}  />
                </div>
            </div>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));