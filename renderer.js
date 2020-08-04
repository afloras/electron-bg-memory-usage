window.addEventListener('load', function() {
  /*document.getElementById('load-image-title').onclick = function() {
    const fs = require('fs')
    const path = require('path')

    const myPath = path.join(__dirname, 'picture.png')

    fs.readFile(myPath, function(err, data) {
      if (err) throw err

      const picture = document.getElementById('picture')
      const param = '#date=' + new Date().getTime()

      picture.style.backgroundImage = 'url(' + 'data:image/png;base64,' + data.toString('base64') + param + ')'
    })
  }*/

  setInterval(() => {
    const fs = require('fs')
    const path = require('path')

    const myPath = path.join(__dirname, 'picture.png')

    fs.readFile(myPath, function(err, data) {
      if (err) throw err

      const picture = document.getElementById('picture')
      const param = '#date=' + new Date().getTime()

      picture.style.backgroundImage = 'url(' + 'data:image/png;base64,' + data.toString('base64') + param + ')'
    })
  }, 200)
})