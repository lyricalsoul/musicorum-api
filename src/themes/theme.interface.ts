import { CollageRequest } from 'src/services/collages/collages.interface'
import { Entity, Period } from 'src/constants'
import Joi from 'joi'
import { ThemeType } from './themes'

export interface Theme {
  name: string
  requiresUserData: boolean

  handleDate(data: CollageRequest): Promise<Record<string, any>>
  createValidationSchema(): Joi.AnySchema
}

export interface IGridTheme {
  rows: number
  columns: number
  show_names: boolean
  show_playcount: boolean
  period: Period
  entity: Entity
  style: 'DEFAULT' | 'CAPTION' | 'SHADOW'
}

export interface IWorkerGenerationData {
  id: string
  user: {
    username: string
    name?: string
    scrobbles: number
  }
  theme: ThemeType
  story: boolean
  hide_username: boolean
  data: Record<string, any>
}

export type ThemeOptions = IGridTheme
