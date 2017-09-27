import { addReducer } from '../reducer'

export function selectActionsFromLogic (mapping = []) {
  if (mapping.length % 2 === 1) {
    console.error('[KEA-LOGIC] uneven mapping given to selectActionsFromLogic:', mapping)
    console.trace()
    return
  }

  let hash = {}

  for (let i = 0; i < mapping.length; i += 2) {
    let logic = mapping[i]
    const actionsArray = mapping[i + 1]

    if (logic._isKeaSingleton) {
      if (!logic._keaReducerConnected) {
        addReducer(logic.path, logic.reducer, true)
        logic._keaReducerConnected = true
      }
    }

    const actions = logic && logic.actions ? logic.actions : logic

    actionsArray.forEach(query => {
      let from = query
      let to = query

      if (query.includes(' as ')) {
        [from, to] = query.split(' as ')
      }

      if (typeof actions[from] === 'function') {
        hash[to] = actions[from]
      } else {
        console.error(`[KEA-LOGIC] action "${query}" missing for logic:`, logic)
        console.trace()
      }
    })
  }

  return hash
}
