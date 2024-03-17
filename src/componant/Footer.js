import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
          <Link to={"/"} className="nav-link px-2 text-body-secondary">
                  Home
                </Link>
          </li>
          <li className="nav-item">
            <Link to={"/ApoinmentShaduler/BookApoinment"} className="nav-link px-2 text-body-secondary">
                  Book Appointment
                </Link>
          </li>
          <li className="nav-item">
          <li>
                <Link to={"/ApoinmentShaduler/About"} className="nav-link px-2 text-body-secondary">
                  About
                </Link>
              </li>
          </li>
        </ul>
        <p className="text-center text-body-secondary">© 2024 Company, Inc</p>
      </footer>
    </>
  );
}
