import styles from './FooterLinkColumn.module.css'

const navItems = [
    {
        title: 'Home',
        sections: [
            {
                name: "Features",
            },
            {
                name: "Our Testimonials",
            },
            {
                name: "FAQ",
            },
        ]
    },
    {
        title: 'About Us',
        sections: [
            {
                name: "Our Mission",
            },
            {
                name: "Our Vission",
            },
            {
                name: "Awards and Recognitions",
            },
            {
                name: "History",
            },
            {
                name: "Teachers",
            },
        ]
    },
    {
        title: 'Academics',
        sections: [
            {
                name: "Special Features",
            },
            {
                name: "Gallery",
            },
        ]
    },
    {
        title: 'Contact Us',
        sections: [
            {
                name: "Information",
            },
            {
                name: "Map & Direction",
            },
        ]
    },
]

const FooterLinkColumn = ({ items }) => {
    return (
        <div className={styles.footerColumns}>
            {navItems.map((items, index) => (
                <div key={index} className={styles.footerColumn}>
                    <h3>{items.title}</h3>
                    <ul>
                        {(items.sections).map((section, index) => (
                            <li key={index}>
                                {section.name}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default FooterLinkColumn
