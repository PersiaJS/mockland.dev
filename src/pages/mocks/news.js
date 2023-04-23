import Link from "next/link";

const MockNewsIndex = () => {
  return (
    <div>
      <h1>Mocks</h1>
      <Link href="/"> HomePage </Link>
      <br />
      <Link href="/mocks"> Mocks </Link>
      <h2>News Apis</h2>
      <div>
        <h2> NEWS LIST API </h2>
        <p>LINK: https://mockland.dev/api/news/list</p>
        <p>method: GET</p>
      </div>
      <div>
        <h2> NEWS CREATE API </h2>
      </div>
      <div>
        <h2> NEWS READ Apis </h2>
      </div>
      <div>
        <h2> NEWS UPDATE API </h2>
      </div>
      <div>
        <h2> NEWS DELETE API </h2>
      </div>
      <div>
        <h2> NEWS SEARCH API </h2>
      </div>
    </div>
  );
};

export default MockNewsIndex;
