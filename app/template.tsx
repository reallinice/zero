'use client'

import type { PhotoProviderBase } from 'react-photo-view/dist/types'
import { ThemeProvider } from 'next-themes'
import { PhotoProvider } from '@/components/PhotoView'

const photoViewConfig: PhotoProviderBase = {
  maskOpacity: 1,
  maskClassName: 'photo-view-mask',
  bannerVisible: false,
  photoClosable: true,
  pullClosable: true,
}

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <PhotoProvider {...photoViewConfig}>{children}</PhotoProvider>
    </ThemeProvider>
  )
}
