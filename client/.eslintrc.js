module.exports = {
    extends: 'google',
    rules: {
      // Additional or modified rules can be added here
      
      // Rule to enforce file names in all lowercase with .js extension
      'filenames/match-regex': ['error', '^[a-z-]+$', true],
  
      // Rule to enforce UTF-8 encoding
      'encoding/utf-8': ['error', { 'skipStrings': false, 'skipComments': false }],
  
      // Rule to enforce maximum line length of 100 characters
      'max-len': ['error', { 'code': 100, 'ignoreUrls': true, 'ignoreComments': false }],
      
      // Rule to enforce the use of special escape sequences (e.g., \n, \t)
      'no-control-regex': 'error',
      'no-useless-escape': 'error',
      
      // Rule to enforce the use of actual Unicode characters for non-ASCII characters
      'unicode-bom': 'error',
    },
  };
  