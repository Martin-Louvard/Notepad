import React from 'react';

const MarkdownInput = (props) => {
  const renderSave = () => {
    return JSON.parse(localStorage.getItem('blocnote'));
  }
  const [value, setValue] = React.useState(renderSave().value);
  const [title, setTitle] = React.useState(renderSave().title);


  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  React.useEffect(
    ()=>{
      props.onChangeTitle(title)
      props.onChangeValue(value);
    }, 
    [value, title]
  )

  const handleSave = () => {
    localStorage.setItem('blocnote', JSON.stringify({title: title, value: value}));
  }

  return (
    <>
      <textarea title={title} value={title} onChange={onChangeTitle} style={{ width: "100%"}} placeholder="Titre de la note" />
      <textarea value={value} onChange={onChange} style={{ width: "100%", height: "80%" }} placeholder="Contenu de la note"/>
      <button className="btn btn-danger" onClick={handleSave}>Sauvegarder</button>
    </>
  );
};

export default MarkdownInput;