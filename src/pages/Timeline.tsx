//Home 
import { FormEvent, useState, KeyboardEvent } from 'react'
import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'
import './Timeline.css'
import { Gif, Image, MapPin, Smiley } from 'phosphor-react'
import { InforArea } from '../components/InfoArea'

export function Timeline(){

  const [newTweet, setNewTweet] = useState('')
 
  const [tweets, setTweets] = useState([
    'Meu primeiro tweet!',
    'Teste!',
    'Deu certo o tweet!',
  ])
  
  
  //como a função foi criada fora do escopo de onde é chamada o React não sabe oq é event, por isso usamos FormEvent para indicar que é um evento de fdormulário; Tem vários outros eventos que podem ser importados do react, para ver é só criar uma importação do react e por event e dar crtl espaço
  function createNewTweet(event: FormEvent){
    event.preventDefault()
    
    setTweets([...tweets, newTweet]) //adicionando um novo tweet usando spreed operator(que copia todos os itens já existentes e adiciona mais um). 
    setNewTweet('')
  }


  function handleHotKeySubmit(event: KeyboardEvent){
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
      setTweets([...tweets, newTweet]) 
      setNewTweet('')
    }
  }
    return (
        <main className="timeline">
          <div>
            <Header title=""/>

            <form onSubmit={createNewTweet} className="new-tweet-form">
              <label htmlFor="tweet">
                <img src="https://github.com/VINNICIUSDEV.png" alt="Vinícius Damascena" />
                <textarea 
                id="tweet" 
                placeholder="What is happening?"
                value={newTweet} 
                onKeyDown={handleHotKeySubmit}
                onChange={(event) => {//onChange detecta quando o valor de entrada de um eleemento muda.
                  /** */
                  /**target (acessa o elemento que disparou o evento, nesse caso a textarea) e value(valor do elemento) */
                  setNewTweet(event.target.value)
                }}
                />
              </label>
              <div className='form-footer'>
                <div className='actions-container'>
                  <Image size={20} color='#1d9bF0'/>
                  <Gif size={20} color='#1d9bF0'/>
                  <Smiley size={20} color='#1d9bF0'/>
                  <MapPin size={20} color='#1d9bF0'/>
                </div>
                <button type="submit">Post</button>
              </div>
            </form>
            
            <Separator/>

            {tweets.map(tweet => {
              return <Tweet key={tweet} content={tweet} />
            })}
          </div>
            <InforArea />
          </main>
    )
}