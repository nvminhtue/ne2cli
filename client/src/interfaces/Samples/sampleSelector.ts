export type TSampleData = {
  id: string,
  name: string,
  created: Date,
}

export type TSamplesState = TSampleData[]

export type TSampleState = TSampleData

export type TState = {
  samples: TSamplesState
  sample: TSampleState
}

export type TStateSelector = {
  sampleReducer: {
    samples: TSamplesState
    sample: TSampleState
  }
}
