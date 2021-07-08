import {useEffect, useRef} from "react";
import {noop} from "../utils/misc";
import {fetchNui} from "../utils/fetchNui";

const LISTENED_KEYS = ["Escape", "Backspace"]

// Basic hook to listen for key presses in NUI in order to exit
export const useExitListener = (visibleSetter) => {
  const setterRef = useRef(noop)

  useEffect(() => {
    setterRef.current = visibleSetter
  }, [visibleSetter])

  useEffect(() => {
    const keyHandler = (e) => {
      if (LISTENED_KEYS.includes(e.code)) {
        setterRef.current(false)
        fetchNui('hideFrame')
      }
    }

    window.addEventListener("keydown", keyHandler)

    return () => window.removeEventListener("keydown", keyHandler)
  }, []);


}