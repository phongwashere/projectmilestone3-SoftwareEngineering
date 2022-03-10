import '../list.css';

function handleRemove(id){
  fetch('/reviews/'+id, {
    method: 'DELETE',
    header: {
       'Accept' : 'application/json',
       'Content-Type' : 'application/json',
    }
  })
  window.location.reload()
 }

const List = (props) => {
  return (
      <div className="mt-2">
      {props.result && props.result.map(results =>{
          return (
            <div key= {results.id}>
              <p> comment ID#: { results.id} </p>
              <p> movieID:{ results.movieID } </p>
              <p> rating:{ results.rating } </p>
              <p> review:{ results.review } </p>
              <button onClick={() => handleRemove(results.id)}>Remove</button>
              <hr/>
            </div>
          )
          })}
      </div>
      )
}

export default List;