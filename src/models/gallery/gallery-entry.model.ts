import type { GalleryImage } from '@/models/shared/gallery-image.model'

export interface GalleryEntry {
  id: string
  image: string
  title: string
  paragraphs: string[]
  photos: GalleryImage[]
}
