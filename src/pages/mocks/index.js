import Link from "next/link";

const MocksIndex = () => {
  return (
    <div>
      <h1>Mocks</h1>
      <Link href="/"> HomePage </Link>
      <h2>Mocks Lists</h2>
      <ul>
        <li>
          <Link href="/mocks/news">News</Link>
        </li>
      </ul>
    </div>
  );
};

export default MocksIndex;
