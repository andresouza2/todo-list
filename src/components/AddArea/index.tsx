import * as C from './Styles';
import { useState, KeyboardEvent } from 'react';

type Props = {
  onEnter: (taskName: string) => void
}

function AddArea({ onEnter }: Props) {

  const [inputText, setInputText] = useState('');

  const handleKeyUp = (e: KeyboardEvent) => {
    if(e.code === 'Enter' && inputText !== '') {
      onEnter(inputText);
      setInputText('')
    }
  }

  return(
    <C.Container>
      <div className="image">➕</div>
      <input
        type="text"
        placeholder='Adicione uma Tarefa...'
        value={inputText}
        onChange={e=>setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </C.Container>
  )
}
export default AddArea
