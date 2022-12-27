import { Counder } from './Counder';
import { useState } from 'react';
import { punch_book_list } from './App';
import { useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import InfoIcon from '@mui/icons-material/Info';

export function Addbook({bookList , setBookList}){
  const [name , setName] = useState("")
  const [poster , setPoster] = useState("")
  const [rating , setRating] = useState("")
  const [summary , setSummary] = useState("")
  const [video , setVideo ] = useState("")
  const navigate = useNavigate();
  return (
    <div className='input'>
    <TextField 
    label="Book Name"
    variant="outlined"
    type="text"
    placeholder='Enter Book Name'
    onChange={(event)=> setName(event.target.value)}
    value ={name}
    />
    <br>
    </br>
     <TextField 
     variant="outlined"
     label="Poster"
    type="text"
    placeholder='Enter Book Poster'
    onChange={(event)=> setPoster(event.target.value)}
    value ={poster}
    />
    <br>
    </br>
     <TextField 
     variant="outlined"
     label="Rating"
    type="text"
    placeholder='Enter Book Rating'
    onChange={(event)=> setRating(event.target.value)}
    value ={rating}
    />
    <br>
    </br>
     <TextField 
     variant="outlined"
     label="Summary"
    type="text"
    placeholder='Enter Book Summary'
    onChange={(event)=> setSummary(event.target.value)}
    value={summary}
    />
    <br></br>
    <TextField 
     variant="outlined"
     label="Video"
    type="text"
    placeholder='Enter Book Video'
    onChange={(event)=> setVideo(event.target.value)}
    value={video}
    />
    <br></br>
    <Button
     variant="contained"
    onClick={() =>{
      const newbook ={
        name : name,
        poster : poster,
        rating : rating,
        summary : summary
      }
     
      const data = bookList
      const data1 = [...data, newbook]
      console.log(data1)
      setBookList(data1)
      navigate("/book")
    } }
    >Add book</Button>
    
</div>
  )
}


export function Booklist({bookList}) {
  // const booklist = punch_book_list;
  // const [name , setName] = useState("")
  // const [poster , setPoster] = useState("")
  // const [rating , setRating] = useState("")
  // const [summary , setSummary] = useState("")
  // const [video , setVideo ] = useState("")
  // const [bookList , setBookList] = useState(punch_book_list)
  // console.log(bookList)
  return (
    <div>
      {/* <div className='input'>
      <TextField 
      label="Book Name"
      variant="outlined"
      type="text"
      placeholder='Enter Book Name'
      onChange={(event)=> setName(event.target.value)}
      value ={name}
      />
      <br>
      </br>
       <TextField 
       variant="outlined"
       label="Poster"
      type="text"
      placeholder='Enter Book Poster'
      onChange={(event)=> setPoster(event.target.value)}
      value ={poster}
      />
      <br>
      </br>
       <TextField 
       variant="outlined"
       label="Rating"
      type="text"
      placeholder='Enter Book Rating'
      onChange={(event)=> setRating(event.target.value)}
      value ={rating}
      />
      <br>
      </br>
       <TextField 
       variant="outlined"
       label="Summary"
      type="text"
      placeholder='Enter Book Summary'
      onChange={(event)=> setSummary(event.target.value)}
      value={summary}
      />
      <br></br>
      <TextField 
       variant="outlined"
       label="Video"
      type="text"
      placeholder='Enter Book Video'
      onChange={(event)=> setVideo(event.target.value)}
      value={video}
      />
      <br></br>
      <Button
       variant="contained"
      onClick={() =>{
        const newbook ={
          name : name,
          poster : poster,
          rating : rating,
          summary : summary
        }
       
        const data = bookList
        const data1 = [...data, newbook]
        console.log(data1)
        setBookList(data1)
      } }
      >Add book</Button>
      
</div> */}

<div className='booklist' >
      {bookList.map((bk, index) => (
        <Book key={index} book={bk} id={index} />
      ))}

    </div>
    </div>
    

  );

}

function Book({ book,id }) {
  const [show, setShow] = useState(false);
  // const sumstyles ={
  //   display: show? "block" : "none"
  // }
  const styles = {
    color: book.rating >= 8 ? "green" : "red"
  };
const navigate = useNavigate()
  return (
    <div className="container">
      <img className="img" src={book.poster} alt={book.name} />
      <div className="tittle">
        <h1 className="name">{book.name} - {id} </h1>
        <p style={styles} className="rating">⭐{book.rating}</p>
      </div>
      {/* <button onClick={() => setShow(!show)}>Toggle Description</button> */}
      {/* <button onClick={()=> navigate("/book/"+ id)} >Info</button> */}
      <IconButton aria-label="likebtn"
      color= "primary"
     onClick={() => setShow(!show)}
      >
        {show ? <ExpandMoreIcon/> : <ExpandLessIcon/> }
       
      </IconButton>
      <IconButton aria-label="likebtn"
      onClick={()=> navigate("/book/"+ id)}
      ><InfoIcon/>
       </IconButton>

      {show ? <p className="summary">{book.summary}</p> : ""}
      <Counder />
    </div>

  );
}
