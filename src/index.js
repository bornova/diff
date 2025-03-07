import { accumulateDiff, observableDiff } from './deepDiff.js'
import { applyDiff, applyChange, revertChange } from './applyRevert.js'

/**
 * A module for deep difference operations.
 * @namespace DeepDiff
 */
const DeepDiff = {
  diff: accumulateDiff,
  observableDiff: observableDiff,
  applyDiff: applyDiff,
  applyChange: applyChange,
  revertChange: revertChange
}

export default DeepDiff
