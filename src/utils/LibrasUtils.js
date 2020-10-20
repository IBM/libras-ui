function formatServerOutput (response) {
  let outputText = response
  if (response instanceof Array) {
    outputText = response.reduce((accumulator, currentValue) => {
      return accumulator + '- ' + currentValue + '\n'
    }, '')
  }
  return outputText
}

function findHardCodedTranslation (inputTextValue) {
  let translatedPhrase = ''
  const hardcodedPhrases = {
    'Ela abraçar filho dela': 'Ela abraçou o filho'
  }
  if (hardcodedPhrases[inputTextValue]) {
    translatedPhrase = hardcodedPhrases[inputTextValue]
  } else {
    translatedPhrase = 'ERROR!!!! Translation not found'
  }
  return translatedPhrase
}

export { formatServerOutput, findHardCodedTranslation }
