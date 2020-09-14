import React from 'react'
import { Button, TextArea } from 'carbon-components-react'

const AdminPage = () => (
  <div className='bx--grid'>
    <div className='bx--row'>
      <div className='bx--col-lg-4'>
        <div >New phrases</div>
        <br />
        <TextArea labelText='Sign language text' placeholder='Insert text' rows='5' />
        <br />
        <TextArea labelText='Spoken language text' placeholder='Insert text' rows='5' />
        <br />
        <Button>Submit</Button>
      </div>
      <div className='bx--col-lg-4'>
        <div>New phrases (JSON)</div>
        <br />
        <TextArea labelText='Insert JSON' placeholder='Insert JSON' rows='13' />
        <br />
        <Button>Submit</Button>
      </div>
    </div>
  </div>
)

export default AdminPage
