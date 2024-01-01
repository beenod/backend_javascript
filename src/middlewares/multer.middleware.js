import multer from 'multer.js'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/temp/')
    },
    filename: function (req, file, cb) {
        /**filename */
      const ownFileName = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalName + '-' + ownFileName)
    }
  })
  
 export  const upload = multer({ storage: storage })