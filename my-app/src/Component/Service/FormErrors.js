import React from 'react';

const utils = {
  testRegex: (value, regex) => value.toString().match(regex),
  rules: {
    required: {
      message: 'The :attribute field is required',
      rule: val => utils.testRegex(val, /.+/),
    },
    max: {
      message: 'The :attribute may not be greater than :max characters',
      rule: (val, options) => val.length <= options[0],
      messageReplace: (message, options) => message.replace(':max', options[0]),
    },
    min: {
      message: 'The :attribute may not be greater than :mix characters',
      rule: (val, options) => val.length >= options[0],
      messageReplace: (message, options) => message.replace(':min', options[0]),
    },
    email: {
      message: 'The :attribute must be a valid email address',
      rule: val => utils.testRegex(val, /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i),
    },
    number: {
      message: 'The :attribute must be a number',
      rule: (val) => utils.testRegex(val, /^\d+.?\d*$/)
    },
    phone: {
      message: 'The :attribute must be a valid phone number',
      rule: (val) => utils.testRegex(val, /^1[3|5|7|8]\d{9}/)
    },
    url: {
      message: 'The :attribute must be a valid url',
      rule: (val) => utils.testRegex(val, /^(https?|ftp):\/\/(-\.)?([^\s/?\.#-]+\.?)+(\/[^\s]*)?$/i)
    },
    accepted: {
      message: 'The :attribute must be a accepted',
      rule: (val) => val === true
    }
  },
}

export default class ReactValidator {
  constructor() {
    this.fields = []
    this.rules = utils.rules
    this.showMessage = false
  }

  hideMessages() {
    this.showMessage = false
  }

  showMessages() {
    this.showMessage = true
  }

  allValid() {
    for (var key in this.fields) {
      if (this.fields.hasOwnProperty(key) && this.fields[key] === false) {
        console.warn(`field ${key} result not match rule`)
        return false
      }
    }
    return true
  }

  message(field, value, testString, customClass, customErrors = {}) {
    this.fields[field] = true
    let tests = testString.split('|')
    let rule, options, message
    for (let i = 0; i < tests.length; i++) {
      value = this.filterEmptyValue(value)
      rule = this.getRule(tests[i])
      options = this.getOptions(tests[i])
      if (!this.isValid(value, rule, options)) {
        this.fields[field] = false
        if (this.showMessage) {
          message =
            customErrors[rule] ||
            customErrors.default ||
            this.rules[rule].message.replace(':attribute', field)

          if (
            options.length > 0 &&
            this.rules[rule].hasOwnProperty('messageReplace')
          ) {
            let replaceMessage = this.rules[rule].messageReplace(
              message,
              options,
            )
            return this.createErrorEle(replaceMessage, customClass)
          }

          return this.createErrorEle(message, customClass)
        }
      }
    }
  }

  createErrorEle(message, customClass) {
    return React.createElement(
      'div',
      { className: customClass || 'error-message' },
      message,
    )
  }

  filterEmptyValue(value) {
    return value === undefined || value === null ? '' : value
  }

  getRule(rule) {
    return rule.split(':')[0]
  }

  getOptions(rule) {
    let parts = rule.split(':')
    return parts.length > 1 ? parts[1].split(',') : []
  }
  isValid(value, rule, options) {
    try {
      return this.rules[rule].rule(value, options)
    } catch (e) {
      console.error(`not find your setting rule ${rule}, Please read doc in https://github.com/febobo/react-validator`)
    }
  }
}