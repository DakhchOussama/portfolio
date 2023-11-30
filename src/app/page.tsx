import CaseStudies from './Components/CaseStudies'
import NavBar from './Components/NavBar'
import Section from './Components/Section'
import Feedbacks from './Components/Feedbacks'

export default function Home() {
  return (
    <>
      <main>
      <NavBar></NavBar>
      <Section></Section>
      <CaseStudies></CaseStudies>
      <Feedbacks></Feedbacks>
      </main>
    </>
  )
}
