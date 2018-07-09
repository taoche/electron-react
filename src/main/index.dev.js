// Set environment for development
// process.env.NODE_ENV = 'development'

// Install `electron-debug` with `devtron`
require('electron-debug')({ showDevTools: true })

// Install `devtools`
require('electron').app.on('ready', () => {
  const installer = require('electron-devtools-installer');
  const extensions = ['REACT_DEVELOPER_TOOLS', 'MOBX_DEVTOOLS'];

  extensions.map(item => {
    installer.default(installer[item])
    .then(() => {})
    .catch(err => {
      console.log(`Unable to install ``${item}``: \n`, err)
    })
  })
})

// Require `main` process to boot app
require('./index')
