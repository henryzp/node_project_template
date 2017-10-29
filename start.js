require('babel-core/register')({
  'presets': [
    'stage-3',
    ['latest-node', {
        target: "8"
    }]
  ],
  'plugins': [
    'transform-decorators-legacy'
  ]
})

require('./server')
