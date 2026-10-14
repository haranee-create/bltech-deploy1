import { useLocale, type Locale } from '../i18n/locale'
import { en } from './en'
import { ko } from './ko'
import type { Content } from './types'

export type * from './types'

export const contents: Record<Locale, Content> = { ko, en }

/** All copy for the current locale (Korean at /, English at /en). */
export const useContent = () => contents[useLocale()]
