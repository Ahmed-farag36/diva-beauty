import Link from "next/link";

export default function Menu() {
  return (
    <>
      <ul className="navigation">
        <li>
          <Link href="/">Home</Link>
        </li>

        <li className="dropdown">
          <Link href="/page-services">Behandlungen</Link>
          <ul>
            <li>
              <Link href="/page-services">Services Grid</Link>
            </li>
            <li>
              <Link href="/page-service-details">Service Details</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/page-pricing">Preise</Link>
        </li>
        <li>
          <Link href="/page-team-details">Über uns</Link>
        </li>
        <li>
          <Link href="/page-contact">Kontakt</Link>
        </li>
      </ul>
    </>
  );
}
