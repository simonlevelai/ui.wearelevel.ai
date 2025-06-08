import StyleDictionary from 'style-dictionary'

// Custom transforms
StyleDictionary.registerTransform({
  name: 'size/pxToRem',
  type: 'value',
  matcher: function(token) {
    return token.type === 'dimension' && token.value.endsWith('px')
  },
  transformer: function(token) {
    return parseFloat(token.value) / 16 + 'rem'
  }
})

StyleDictionary.registerTransform({
  name: 'font/family',
  type: 'value',
  matcher: function(token) {
    return token.type === 'fontFamily'
  },
  transformer: function(token) {
    return Array.isArray(token.value) ? token.value.join(', ') : token.value
  }
})

// Custom formats
StyleDictionary.registerFormat({
  name: 'css/variables',
  formatter: function(dictionary) {
    return ':root {\n' +
      dictionary.allTokens.map(token => {
        const name = token.name.replace(/\./g, '-')
        return `  --${name}: ${token.value};`
      }).join('\n') +
      '\n}'
  }
})

StyleDictionary.registerFormat({
  name: 'javascript/es6',
  formatter: function(dictionary) {
    return 'export const tokens = ' + 
      JSON.stringify(dictionary.tokens, null, 2) + ';\n\n' +
      'export default tokens;'
  }
})

StyleDictionary.registerFormat({
  name: 'typescript/es6-declarations',
  formatter: function(dictionary) {
    const tokenInterface = generateTokenInterface(dictionary.tokens)
    
    return `export interface DesignTokens ${tokenInterface}\n\n` +
      'export const tokens: DesignTokens;\n\n' +
      'export default tokens;'
  }
})

function generateTokenInterface(obj, indent = 0) {
  const spaces = '  '.repeat(indent)
  let result = '{\n'
  
  for (const [key, value] of Object.entries(obj)) {
    if (value.value !== undefined) {
      result += `${spaces}  ${key}: string;\n`
    } else {
      result += `${spaces}  ${key}: ${generateTokenInterface(value, indent + 1)}\n`
    }
  }
  
  result += `${spaces}}`
  return result
}

export default {
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      transforms: ['attribute/cti', 'name/cti/kebab', 'font/family'],
      buildPath: 'dist/',
      files: [{
        destination: 'tokens.css',
        format: 'css/variables'
      }]
    },
    scss: {
      transformGroup: 'scss',
      transforms: ['attribute/cti', 'name/cti/kebab', 'font/family'],
      buildPath: 'dist/',
      files: [{
        destination: 'tokens.scss',
        format: 'scss/variables'
      }]
    },
    js: {
      transformGroup: 'js',
      transforms: ['attribute/cti', 'name/cti/camel', 'font/family'],
      buildPath: 'dist/',
      files: [{
        destination: 'tokens.js',
        format: 'javascript/es6'
      }]
    },
    json: {
      transformGroup: 'js',
      transforms: ['attribute/cti', 'name/cti/kebab', 'font/family'],
      buildPath: 'dist/',
      files: [{
        destination: 'tokens.json',
        format: 'json/nested'
      }]
    },
    tailwind: {
      transformGroup: 'js',
      transforms: ['attribute/cti', 'name/cti/camel', 'font/family'],
      buildPath: 'dist/',
      files: [{
        destination: 'tailwind.config.js',
        format: 'javascript/es6',
        options: {
          outputReferences: true
        }
      }]
    }
  }
}