import React from 'react'
import { Button, TextArea, Loading, ModalWrapper } from 'carbon-components-react'
import { formatServerOutput, findHardCodedTranslation } from '../../utils/LibrasUtils'
import { ArrowRight32, Information32 } from '@carbon/icons-react'

const UserPage = () => {
  const [inputTextValue, inputTextSetValue] = React.useState('')
  const [outputTextValue, outputTextSetValue] = React.useState('')
  const [loading, loadingSetValue] = React.useState('')

  const inputTextOnChange = e => {
    inputTextSetValue(e.target.value)
  }

  const handleClick = () => {
    /*
    * Se a variavel de ambiente REACT_APP_API_MOCK for true, simular a resposta do servidor
    * Caso contrario, enviar request ao servidor
    */
    if (process.env.REACT_APP_API_MOCK && process.env.REACT_APP_API_MOCK.toUpperCase() === 'TRUE') {
      const hardCodedTranslation = findHardCodedTranslation(inputTextValue)
      outputTextSetValue(hardCodedTranslation)
    } else {
      let xhr = new window.XMLHttpRequest()
      xhr.onreadystatechange = function () {
        if (xhr.readyState === window.XMLHttpRequest.DONE) {
          console.log(xhr.responseText)
          const responseJSON = JSON.parse(xhr.responseText)
          let correctedText = ''
          if (xhr.status === 200) {
            // Format server response
            correctedText = formatServerOutput(responseJSON.spoken)
          } else {
            correctedText = 'ERROR!!!! ' + responseJSON.spoken
          }
          outputTextSetValue(correctedText)
        }
        loadingSetValue(false)
      }
      const url = process.env.REACT_APP_API_SERVICE_URL + '?text=' + JSON.stringify(inputTextValue)
      xhr.open('GET', url, true)
      xhr.setRequestHeader('Accept', '*/*')
      xhr.setRequestHeader('Content-Type', 'text/plain')
      xhr.send()
      loadingSetValue(true)
    }
  }

  const cleanText = () => {
    inputTextSetValue('')
  }

  return (
    <div>
      {loading ? <Loading /> : null}
      <div className='bx--grid bx--grid--full-width user-page'>
        <div className='bx--row user-page-row'>
          <div className='bx--col-lg-5'>
            <div className='welcome-div'>Welcome!</div>
            <div className='container-help'>
              <span className='user-page-help'>How it works</span>
              <div className='info-icon'>
                <ModalWrapper
                  passiveModal
                  shouldCloseAfterSubmit
                  handleSubmit={function noRefCheck () {}}
                  renderTriggerButtonIcon={Information32}
                  buttonTriggerClassName='btn-help'
                >
                  <div className='video-container'>
                    <iframe src='https://player.vimeo.com/video/46398191'
                      title='How it Works'
                      frameBorder='0'
                      allowFullScreen />
                  </div>
                </ModalWrapper>
              </div>
            </div>
          </div>
        </div>
        <div className='bx--row user-page-row'>
          <div className='bx--col-lg-5'>
            <TextArea
              id='textoASerCorrigido'
              labelText='Your text'
              placeholder='Insert text'
              rows={20}
              onChange={inputTextOnChange}
              value={inputTextValue}
              className='user-page-text-area'
            />
            <br />
            <Button
              onClick={handleClick}
              className='review-button'
              kind='secondary'
            >
              Review Text
            </Button>
            <Button
              onClick={cleanText}
              className='clean-review-Button'
              kind='secondary'
            >
              Clear Text
            </Button>
          </div>
          <div className='bx--col-lg-2'>
            <ArrowRight32 className='user-page-arrow' />
          </div>
          <div className='bx--col-lg-5'>
            <TextArea
              value={outputTextValue}
              labelText='Revised text'
              placeholder='Your revised text will appear here'
              rows={20}
              className='user-page-text-area-second'
            />
            <br />
            <Button className='copy-Button' kind='secondary'>
              Copy Text
            </Button>
            <div className='click-here'>
              <strong>Incorrect review?</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserPage
