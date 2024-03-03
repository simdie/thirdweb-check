import {Link} from "react-router-dom";

export default function MenuItem({title, address}) {
  return (
    <div>
        <Link to={address} className="mx-4 lg:mx-6 hover:text-amber-600">
            {/* <Icon className="text-2xl sm:hidden mx-4" /> */}
            <p className="hidden sm:inline my-2 text-base" > {title} </p>
        </Link>
    </div>
  )
}
