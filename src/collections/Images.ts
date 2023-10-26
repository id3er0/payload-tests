import { CollectionConfig } from 'payload/types'
import type { ImageSize, ImageUploadFormatOptions } from 'payload/dist/uploads/types'

const formatOptionsWebp: ImageUploadFormatOptions = {
  format: 'webp',
  options: {
    quality: 90,
  },
}

const imageSizeCenter: Partial<ImageSize> = {
  fit: 'cover',
  position: 'centre',
  withoutEnlargement: true,
};

const imageSizeCenterWebp: Partial<ImageSize> = {
  ...imageSizeCenter,
  formatOptions: formatOptionsWebp,
};

const Images: CollectionConfig = {
  slug: 'images',
  upload: {
    formatOptions: formatOptionsWebp,
    resizeOptions: {
      width: 840,
      height: 300,
      ...imageSizeCenter,
    },
    imageSizes: [
      {
        name: 'small',
        width: 300,
        height: 150,
        ...imageSizeCenterWebp,
      },
      {
        name: 'tablet',
        width: 400,
        height: 180,
        ...imageSizeCenterWebp,
      },
      {
        name: 'desktop',
        width: 600,
        height: 240,
        ...imageSizeCenterWebp,
      },
    ],
    adminThumbnail: 'small',
    mimeTypes: ['image/*'],
  },
  fields: [
  ],
}

export default Images
