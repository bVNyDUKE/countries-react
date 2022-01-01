import { useEffect, useRef, useState } from 'react'

export default function useDropdown(initState){
  const triggerRef = useRef(null) // optional
  const nodeRef = useRef(null) // required
  const [show, setShow] = useState(initState)
  const [selected, setSelected] = useState('')

  const handleClickOutside = event => {
    //if click is on trigger element, and a selection is not active toggle modal
    if(triggerRef.current &&
        triggerRef.current.contains(event.target) && selected === '') {
      return setShow(!show)
    }

    //if click is on trigger element, and a selection is active, clear the selection
    if(triggerRef.current &&
        triggerRef.current.contains(event.target) && selected !== '') {
      setSelected('')
    }

    //if modal is open and click is outside modal, close it
    if(nodeRef.current &&
      !nodeRef.current.contains(event.target)) {
      console.log('closing modal')
      return setShow(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  })

  return {
    triggerRef,
    nodeRef,
    show,
    setShow,
    selected,
    setSelected
  }
}