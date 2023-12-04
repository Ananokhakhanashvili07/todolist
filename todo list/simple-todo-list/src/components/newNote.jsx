import '../components/newNote.css'


const NewNotes = () => {
    return (
    <>
    
      <div className="new-note">
        <h1>NEW NOTE</h1>
        <form onSubmit={onSubmit}>
            <input className='input-note' ref={inputRef} type="text" placeholder="Input your note..." />
            <div className="buttons">
                <button className='cancel'>CANCEL</button>
                <button className='apply' type='submit' >APPLY</button>
            </div>
        </form>
      </div>
    </>
)}

export default NewNotes

