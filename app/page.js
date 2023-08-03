import Navbar from './Navbar'
import Banner from './Banner'
import WhoWeAre from './WhoWeAre'
import SolvingProblemsBanner from './SolvingProblemsBanner'
import CoreValues from './CoreValues'
import OurWorks from './OurWorks'
import Hiring from './Hiring'
import Footer from './Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <Navbar />
      <Banner />
      <WhoWeAre />
      <SolvingProblemsBanner />
      <CoreValues />
      <OurWorks />
      <Hiring />
      <Footer />
    </main>
  )
}
