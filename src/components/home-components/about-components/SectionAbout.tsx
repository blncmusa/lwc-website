import AboutImages from "./AboutImages"
import AboutText from "./AboutText"
import React from 'react'
import { useScrollStore } from "../../../store/scrollStore.ts"

export default function SectionAbout() {

  const aboutRef = React.useRef(null)
  const setAboutSectionRef = useScrollStore((state: any) => state.setAboutSectionRef)

  React.useEffect(() => {
    setAboutSectionRef(aboutRef.current);
  }, [setAboutSectionRef])

  return (
    <div className="flex w-full max-w-screen-lg mx-auto" id="sectionAbout" ref={aboutRef}>
      <div className="w-1/2">
        <AboutText />
      </div>
      <div className="w-1/2">
        <AboutImages />
      </div>
    </div>
  )
}
