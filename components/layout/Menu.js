import Link from "next/link"

export default function Menu() {

    return (
        <>
            <ul className="navigation">
                <li className="current dropdown"><Link href="/">Home</Link>
                    <ul>
                        <li><Link href="/">Home page 01</Link></li>
                        <li><Link href="/index-2">Home page 02</Link></li>
                        <li><Link href="/index-3">Home page 03</Link></li>
                        <li><Link href="/index-4">Home page 04</Link></li>
                        <li><Link href="/index-5">Home page 05</Link></li>
                        <li><Link href="/index-6">Home page 06</Link></li>
                        <li><Link href="/index-7">Home page 07</Link></li>
                        <li><Link href="/index-8">Home page 08</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="/page-about">Pages</Link>
                    <ul>
                        <li><Link href="/page-about">About</Link></li>
                        <li className="dropdown"><Link href="/page-team">Team</Link>
                            <ul>
                                <li><Link href="/page-team">Team Grid</Link></li>
                                <li><Link href="/page-team-details">Team Details</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/page-pricing">Pricing</Link></li>
                        <li><Link href="/page-testimonial">Testimonial</Link></li>
                        <li><Link href="/page-faq">FAQ</Link></li>
                        <li><Link href="/page-error">404</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="/page-services">Services</Link>
                    <ul>
                        <li><Link href="/page-services">Services Grid</Link></li>
                        <li><Link href="/page-service-details">Service Details</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="/page-product">Shop</Link>
                    <ul>
                        <li><Link href="/page-product">Shop Grid</Link></li>
                        <li><Link href="/shop-product-details">Shop Details</Link></li>
                        <li><Link href="/shop-products-sidebar">Shop Sidebar</Link></li>
                        <li><Link href="/shop-cart">Shop Cart</Link></li>
                        <li><Link href="/shop-checkout">Shop Checkout</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="/news-grid">News</Link>
                    <ul>
                        <li><Link href="/news-grid">News Grid</Link></li>
                        <li><Link href="/news-details">News Details</Link></li>
                    </ul>
                </li>
                <li><Link href="/page-contact">Contact</Link></li>
            </ul>
        </>
    )
}
