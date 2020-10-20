import multer from 'multer'

import uploadConfig from '../config/upload'

import FileController from '../controllers/FileController'

const upload = multer(uploadConfig)

const fileController = new FileController()

const fileRoutes = [
  {
    method: 'get',
    path: '/files/:id/:name',
    action: fileController.show.bind(fileController),
    middlewares: [],
  },
  {
    method: 'post',
    path: '/files/upload',
    action: fileController.upload.bind(fileController),
    middlewares: [upload.single('file')],
  },
]

export default fileRoutes
