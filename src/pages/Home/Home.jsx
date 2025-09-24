import Banner from '../../components/Banner/Banner'
import Nav from '../../components/Nav/Nav'
import Hero from '../../components/Hero/Hero'
import BenefitsSection from '../../components/BenefitsSection/BenefitsSection'
import TestimonialsSection from '../../components/TestimonialsSection/TestimonialsSection'
import FaqSection from '../../components/FaqSection/FaqSection'
import PagesSection from '../../components/PagesSection/PagesSection'
import Footer from '../../components/Footer/Footer'
import { pageData } from './HomeData'


const Home = () => {
    return (
        <>
            <header>
                <Banner text={'Admission is Open, Grab your seat now'} />
                <Nav navItems={pageData.navItems} />
                <Hero heroData={pageData.hero} />
            </header>
            <main>
                <BenefitsSection benefitsData={pageData.benefits} />
                <TestimonialsSection testimonialsData={pageData.testimonials} />
                <FaqSection faqData={pageData.faq} />
                <PagesSection pagesData={pageData.pages} />
            </main>
            <Footer footerData={pageData.footer} />
        </>
    )
}

export default Home
