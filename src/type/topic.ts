import { Option } from './option'
export interface Topic {
  id: string   
  userId: string
  avatar: string
  content: string
  images: string[]
  options: Option[]
}