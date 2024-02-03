// import "../styles/Note.css";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

const Note = ({ id, text, deleteNote }) => {
  return (
    <div className="note">
      <div className="note__body">{text}</div>
      <div className="note__footer">
        <DeleteForeverOutlinedIcon
          className="note__delete"
          onClick={() => deleteNote(id)}
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default Note;
