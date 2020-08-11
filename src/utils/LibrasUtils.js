function formatServerOutput (outputString) {
  const outputArray = JSON.parse(outputString)
  const outputText = outputArray.reduce((accumulator, currentValue) => {
    return accumulator + '- ' + currentValue + '\n'
  }, '')
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
