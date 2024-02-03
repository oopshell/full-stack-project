// import LinearProgress from "@mui/material/LinearProgress";
// or
import { LinearProgress } from "@mui/material";

const CreateNote = ({ textHandler, addNote, inputText }) => {
  const charLimit = 100;
  const charLeft = charLimit - inputText.length;
  return (
    <div className="note">
      <textarea
        cols="10"
        rows="5"
        value={inputText}
        placeholder="Type..."
        maxLength={charLimit}
        onChange={textHandler}
      ></textarea>
      <div className="note__footer">
        <button className="note__save" onClick={addNote}>
          Save
        </button>
        <span className="label">{charLeft} left</span>
      </div>
      <LinearProgress
        className="char__progress"
        variant="determinate"
        value={charLeft}
      />
    </div>
  );
};

export default CreateNote;
