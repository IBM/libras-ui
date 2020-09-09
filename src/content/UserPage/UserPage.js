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
          let correctedText = ''
          if (xhr.status === 200) {
            // Format server response
            correctedText = formatServerOutput(xhr.responseText)
          } else {
            correctedText = 'ERROR!!!! ' + xhr.responseText
          }
          outputTextSetValue(correctedText)
        }
        loadingSetValue(false)
      }
      xhr.open('POST', process.env.REACT_APP_API_SERVICE_URL, true)
      xhr.setRequestHeader('Accept', '*/*')
      xhr.setRequestHeader('Content-Type', 'text/plain')
      xhr.setRequestHeader('authorization', `Bearer ${process.env.REACT_APP_LIBRAS_API_TOKEN}`)
      xhr.send(inputTextValue)
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
                      frameborder='0'
                      allow='autoplay; fullscreen'
                      allowfullscreen />
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
              labelText='Spoken language'
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
              Translate
            </Button>
            <Button
              onClick={cleanText}
              className='clean-review-Button'
              kind='secondary'
            >
              Clear
            </Button>
          </div>
          <div className='bx--col-lg-2'>
            <ArrowRight32 className='user-page-arrow' />
          </div>
          <div className='bx--col-lg-5'>
            <TextArea
              value={outputTextValue}
              labelText='Sign language'
              rows={20}
              className='user-page-text-area-second'
              placeholder='Translation'
            />
            <br />
            <Button className='copy-Button' kind='secondary'>
              Copy
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
