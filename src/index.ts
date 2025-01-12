import {get} from './input-parameters'
import {runRunbook} from './run-runbook'
import {setFailed} from '@actions/core'

async function run(): Promise<void> {
  try {
    const inputParameters = get()
    await runRunbook(inputParameters)
  } catch (e: unknown) {
    if (e instanceof Error) {
      setFailed(e)
    }
  }
}

run()
