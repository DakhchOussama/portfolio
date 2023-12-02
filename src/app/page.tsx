import CaseStudies from './Components/CaseStudies'
import NavBar from './Components/NavBar'
import Section from './Components/Section'
import Feedbacks from './Components/Feedbacks'
import Education from './Components/Education'
import GetInTouc from './Components/GetInTouc'

export default function Home() {
  return (
    <>
      <main>
      <NavBar></NavBar>
      <Section></Section>
      <CaseStudies></CaseStudies>
      <Feedbacks></Feedbacks>
      <Education></Education>
      <GetInTouc></GetInTouc>
      </main>
    </>
  )
}
