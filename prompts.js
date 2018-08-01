const conf = require('./meta.json')
const questions = Object.keys(conf).map((key) => {
  const question = conf[key]
  question.name = key
  const when = question.when
  if (when) {
    question.when = function (answers) {
      return when.split('&&').every((condition) => {
        condition = condition.trim()
        const reverse = condition.charAt(0) === '!'
        if (reverse) {
          condition = condition.slice(1)
        }
        let val = answers[condition]
        if (reverse) {
          val = !val
        }
        return val
      })
    }
  }
  return question
})

module.exports = questions