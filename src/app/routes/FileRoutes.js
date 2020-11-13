import multer from 'multer'
import { auth } from '../middlewares/auth'

import uploadConfig from '../config/upload'

import FileController from '../controllers/FileController'

const upload = multer(uploadConfig)

const fileController = new FileController()

const fileRoutes = [
  {
    method: 'get',
    path: '/files/:id/:name',
    action: fileController.show.bind(fileController),
    middlewares: [auth],
  },
  {
    method: 'post',
    path: '/files/upload',
    action: fileController.upload.bind(fileController),
    middlewares: [auth, upload.single('file')],
  },
]

export default fileRoutes
