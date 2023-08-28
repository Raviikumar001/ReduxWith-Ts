import { useSelector ,  useDispatch  } from "react-redux";
import NewNoteInput from "./components/NewNoteInput";
import { NotesState } from "./noteReducer";
import { addNote } from "./action";



function App() {

const notes =useSelector<NotesState, NotesState["notes"]>((state)=> state.notes)  
const dispatch = useDispatch()
const onAddNote =(note: string)=> {
  dispatch(addNote(note))
}

  return (
    <>
    <NewNoteInput addNote={onAddNote} />
      <hr />
      <ul>
        {notes.map((note)=> (
          <li key={note}> {note}</li>
        ) )}
      </ul>
    </>
  );
}

export default App;
