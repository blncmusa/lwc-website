import AboutImages from "./AboutImages"
import AboutText from "./AboutText"

export default function SectionAbout() {
  return (
    <div className="flex w-full max-w-screen-lg mx-auto">
      <div className="w-1/2">
        <AboutText />
      </div>
      <div className="w-1/2">
        <AboutImages />
      </div>
    </div>
  )
}
