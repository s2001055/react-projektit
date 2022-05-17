const Note = ({ note }) => {
    console.log(note);
    
    return (
        <section>
            <li>{note.content}</li>
        </section>
    );
}

export default Note;