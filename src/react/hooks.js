import { useMemo, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export function useProps (logic, props) {
  useMountedLogic(logic, props)

  return useMemo(() => {
    let response = {}

    for (const key of Object.keys(logic.selectors)) {
      Object.defineProperty(response, key, {
        get: () => useSelector(logic.selectors[key])
      })
    }

    return response
  }, [])
}

export function useActions (logic, props) {
  useMountedLogic(logic, props)

  const dispatch = useDispatch()

  return useMemo(() => {
    let response = {}

    for (const key of Object.keys(logic.actions)) {
      response[key] = (...args) => dispatch(logic.actions[key](...args))
    }

    return response
  }, [dispatch])
}

export function useMountedLogic (logic, props) {
  // TODO: guard agains changing the key
  const unmount = useRef(undefined)
  if (!unmount.current) {
    unmount.current = logic.mount(props)
  }
  useEffect(() => unmount.current, [])
}