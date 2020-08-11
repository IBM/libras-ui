import React from 'react'
import { Button, TextArea } from 'carbon-components-react'

const AdminPage = () => (
  <div className='bx--grid'>
    <div className='bx--row'>
      <div className='bx--col-lg-4'>
        <div >Inserção de novas frases </div>
        <br />
        <TextArea labelText='Insira uma nova frase' placeholder='Insira o texto aqui' rows='5' />
        <br />
        <TextArea labelText='Insira a frase corrigida' rows='5' />
        <br />
        <Button>Submeter</Button>
      </div>
      <div className='bx--col-lg-4'>
        <div>Inserção de novas frases - JSON</div>
        <br />
        <TextArea labelText='Insira o JSON com as frases a serem adicionadas' placeholder='Insira o JSON aqui' rows='13' />
        <br />
        <Button>Submeter</Button>
      </div>
    </div>
  </div>
)

export default AdminPage
