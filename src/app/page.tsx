import CaseStudies from './Components/CaseStudies'
import NavBar from './Components/NavBar'
import Section from './Components/Section'
import Feedbacks from './Components/Feedbacks'
import Education from './Components/Education'
import GetInTouch from './Components/GetInTouch'

export default function Home() {
  return (
    <>
      <main>
      <NavBar></NavBar>
      <Section></Section>
      <CaseStudies></CaseStudies>
      <Feedbacks></Feedbacks>
      <Education></Education>
      <GetInTouch></GetInTouch>
      </main>
    </>
  )
}
