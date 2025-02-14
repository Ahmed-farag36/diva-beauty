import Link from "next/link"

const LearnMore = ({ link, text, show = true }) => {
  if (!show) return null
  
  return (
    <div className="text-center">
      <Link href={link} className="theme-btn btn-style-one">
        <span className="btn-title">{text}</span>
      </Link>
    </div>
  )
}

export default LearnMore 