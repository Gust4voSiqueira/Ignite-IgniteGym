/* eslint-disable @typescript-eslint/no-empty-interface */
import 'expo-file-system'

declare module 'expo-file-system' {
  type FileInfoSizeProp = { size: number }
  export interface FileInfo extends FileInfoSizeProp {}
}
