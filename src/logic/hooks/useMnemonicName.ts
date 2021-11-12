import { useEffect, useState } from 'react'
import { getChainInfo } from 'src/config'
import { animalsDict, adjectivesDict } from './useMnemonicName.dict'

const animals: string[] = animalsDict.trim().split(/\s+/)
const adjectives: string[] = adjectivesDict.trim().split(/\s+/)

const getRandomItem = <T>(arr: T[]): T => {
  return arr[Math.floor(arr.length * Math.random())]
}

export const getRandomName = (noun = getRandomItem<string>(animals)): string => {
  const adj = getRandomItem<string>(adjectives)
  return `${adj}-${noun}`
}

export const useMnemonicName = (noun?: string): string => {
  const [name, setName] = useState<string>('')

  useEffect(() => {
    setName(getRandomName(noun))
  }, [noun])

  return name
}

export const useMnemonicSafeName = (): string => {
  const { chainName } = getChainInfo()
  return useMnemonicName(`${chainName.toLowerCase()}-safe`)
}
