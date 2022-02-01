import Link from "next/link";
import Header from "../src/components/nav/Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <div>
        <h1>Fotter</h1>
      </div>
    </>
  );
}
export default Layout;
