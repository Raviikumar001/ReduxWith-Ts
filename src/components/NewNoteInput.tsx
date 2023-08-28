import { ChangeEvent, useState } from "react";
interface NewNoteInputProps {
    addNote(note: string):void;
}


const NewNoteInput: React.FC<NewNoteInputProps> = ({addNote}) => {
    const [Note, setNote] = useState("");

    const updateNote = (event:ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value)
    }

    const onAddNoteClick = ()=> {
        addNote(Note);
        setNote("");
    }
    
  return (
    <div>
      <input value={Note} onChange={updateNote} type="text" name="note" placeholder="Note" />
      <button onClick={onAddNoteClick}>Add note</button>
    </div>
  );
};

export default NewNoteInput;
