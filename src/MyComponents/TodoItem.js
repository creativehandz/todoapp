import React from 'react'

export const TodoItem = ({ todo, onDelete }) => {
    const [time, setTime] = React.useState(0);
    const [timerOn, setTimeOn] = React.useState(false);
     React.useEffect(()=>{

      let interval = null;
      if(timerOn){
          interval =setInterval(() => {
              setTime(prevTime => prevTime + 10)
          },10)

      }else{
          clearInterval(interval)
      }
      return() => clearInterval(interval)
  },[timerOn])
    return (
        <>

            <div className="col-4 mb-5">
                <div className="card bg-light shadow">
                    <div className="card-body">
                        <h4 className="card-title">{todo.title}</h4>
                        <p className="card-text">{todo.desc}</p>
                        <div className="d-flex justify-content-start">
                        {!timerOn && time === 0 &&(
                            <button className="btn btn-sm btn-success" onClick={() => setTimeOn(true)} >Start</button>
                          )}
                          {timerOn &&(
                            <button className="btn btn-sm btn-success" onClick={() => setTimeOn(false)} >End</button>
                          )}
                          {!timerOn && time !== 0 &&(
                            <button className="btn btn-sm btn-success" onClick={() => setTimeOn()} >Complete</button>
                          )}
                          

                          <div className="timer px-2">{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:{("0" + ((time / 10 ) % 10)).slice(-2)}</div>
                          
                        
                        <button className="btn btn-sm btn-danger ms-auto" onClick={() => { onDelete(todo) }}>Delete</button> 
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}