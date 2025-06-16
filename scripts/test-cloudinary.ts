// scripts/test-cloudinary.ts
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: 'root',
  api_key: '586378164623882',
  api_secret: 'cNlk5bKToQune33y2lFlpP3ghdg',
})

const filePath = '/home/dovepeak/Pictures/test.jpg'

cloudinary.uploader.upload(filePath, { folder: 'livingspot' })
  .then(result => {
    console.log('✅ Upload Success:', result.secure_url)
  })
  .catch(error => {
    console.error('❌ Upload Failed:', error)
  })
