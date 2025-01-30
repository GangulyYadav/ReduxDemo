import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNote } from '../redux/notesSlice'

function App() {
    const dispatch = useDispatch()
    const notes = useSelector(state => state.notes)
    const [IsAddModalVisible, setIsAddModalVisible] = useState(false)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    return (
        <>
            <div style={{
                height: '100vh',
                width: '100vw',
                backgroundColor: '#8174A0',
                margin: 0
            }}>
                <button onClick={() => setIsAddModalVisible(true)} style={{ position: 'absolute', top: 20, right: 30 }}>Add Note</button>

                <div style={{
                    height: '80vh',
                    width: '100vw',
                    backgroundColor: '#8160A0',
                    // marginTop:40,
                    flexDirection: 'column'
                }}>

                    <br />
                    <h1 style={{ paddingLeft: 30 }}>Total Notes : {notes.numberOfNotes}</h1>
                    <div style={{ display:'flex',flexDirection: 'row', padding: 20, justifyContent: 'center', alignItems: 'center' }}>

                        {
                            notes.AllNotes.map((item, index) => (
                                <div style={{
                                    height: '20vh',
                                    width: '10vw',
                                    borderRadius: 15,
                                    // boxShadow: '0 0 0 50vmax rgba(0,0,0,.5)',
                                    margin: 30,
                                    backgroundColor: '#81F0FF',
                                    flexDirection: 'column',
                                    alignItems: "center",
                                    justifyContent: 'center',
                                    alignSelf: 'center',

                                    padding: 15
                                }}>
                                    <h3>{item.Title}</h3>
                                    <p>{item.Content.slice(10)}{item.Content.length > 10 && '...'}</p>
                                </div>
                            ))
                        }
                    </div>



                </div>
            </div>






            {/* Note Add Modal */}

            {
                IsAddModalVisible &&

                <div style={{
                    position: 'absolute',
                    top: 10,
                    // left:'50%',
                    // right:'50%',
                    // marginRight:50,
                    marginLeft: '20%',
                    height: '70vh',
                    width: '60vw',
                    borderRadius: 15,
                    boxShadow: '0 0 0 50vmax rgba(0,0,0,.5)',
                    backgroundColor: '#8174A0',
                    flexDirection: 'column',
                    alignItems: "center",
                    justifyContent: 'center',
                    alignSelf: 'center',
                    padding: 15

                }}>
                    <label htmlFor="title">Title</label>
                    <br />

                    <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <br />
                    <label htmlFor="content">Content</label>
                    <br />
                    <textarea rows={8} cols={20} type="text" name="content" id="content" value={content} onChange={(e) => setContent(e.target.value)} />

                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: '5%',
                        marginLeft: '30%',
                        marginRight: '30%',
                        alignItems: 'center'
                    }}>

                        <button onClick={() => {


                            dispatch(addNote({
                                Title: title,
                                Content: content
                                // title,
                                // content
                            }))

                            setIsAddModalVisible(false)


                        }

                        }>Save</button>
                        <button onClick={() => setIsAddModalVisible(false)}>Close</button>

                    </div>

                </div >

            }


        </>
    )
}

export default App