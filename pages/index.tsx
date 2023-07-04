import { GetServerSidePropsContext } from "next";

const ExamplePage = () => {
  return (
    <div>
      <h1>Test Page </h1>
    </div>
  );
};

export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
  ctx.res.setHeader("Content-Type", "application/xml");
  ctx.res.write(
    "<breakfast_menu><food><name>Belgian Waffles</name><price>$5.95</price><description>Two of our famous Belgian Waffles with plenty of real maple syrup</description><calories>650</calories></food></breakfast_menu>"
  );
  ctx.res.end();
  return { props: {} };
};
export default ExamplePage;
