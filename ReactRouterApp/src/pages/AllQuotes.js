import { Link } from "react-router-dom";
const AllQuotes = () => {

    return (
        <section>

        <h1>All Quotes</h1>
        <ul>
            <li>
                <Link to='/quotes/q1'>Life</Link>
            </li>
            <li>
                <Link to='/quotes/q2'>Love</Link>
            </li>
            <li>
                <Link to='/quotes/q3'>Games</Link>
            </li>
        </ul>
        </section>
    );
};
export default AllQuotes;