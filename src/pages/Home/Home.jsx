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
