import { FormEvent, useState, KeyboardEvent } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import './Status.css'
import { PaperPlaneRight } from "phosphor-react"

export function Status(){
  const [newAnswer, setNewAnswer] = useState('')
 
  const [answers, setAnswers] = useState([
    'Concordo...',
    'Olha, faz sentido!',
    'Parabéns pelo progresso!'
  ])

  function createNewAnswer(event: FormEvent){
    event.preventDefault()
    
    setAnswers([...answers, newAnswer])
    setNewAnswer('')
  }

  function handleHotKeySubmit(event: KeyboardEvent){
      if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)){//metaKey é o ctrl do mac
        setAnswers([...answers, newAnswer])
        setNewAnswer('')
      }
  }

    return (
        <main className="status">
            <Header title="Post"/>
            
            <Tweet content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi et porro, quos accusamus est in sapiente aut iure eum aliquid repellendus libero eaque itaque vero quia amet animi dignissimos aperiam." />

            <Separator/>

            <form onSubmit={createNewAnswer} className="answer-tweet-form">
              <label htmlFor="tweet">
                <img src="https://github.com/VINNICIUSDEV.png" alt="Vinícius Damascena" />
                <textarea 
                id="tweet" 
                value={newAnswer}
                onKeyDown={handleHotKeySubmit}//Ao pressionar uma tecla ou atalho 
                onChange={(event)=>{
                  setNewAnswer(event.target.value)
                }}
                placeholder="Tweet your answer" 
                />
              </label>

              <button type="submit">
                <PaperPlaneRight />
                <span>Answer</span>
              </button>
            </form>
            
            {answers.map(answer => {
              return <Tweet key={answer} content={answer} />
            })}
             
          </main>
    )
}