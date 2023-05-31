import * as React from "react";

import Layout from "@components/layout";
import Seo from "@components/seo";

const IndexPage = () => (
  <Layout>
    <form className="grid w-full desktop:grid-cols-2 desktop:grid-rows-3">
      <label htmlFor="bill" className="inline-flex flex-col flex-nowrap">
        Bill
        <input type="number" id="bill" />
      </label>
      <label htmlFor="tip" className="inline-flex flex-col flex-nowrap">
        Select Tip %
        <input type="number" id="tip" />
      </label>
      <label htmlFor="people" className="inline-flex flex-col flex-nowrap">
        Number of People
        <input type="number" id="people" />
      </label>
      <section
        className="flex flex-col flex-nowrap justify-evenly rounded-3xl bg-neutral-500 p-10 desktop:col-start-2 desktop:row-span-full"
        aria-label="Result"
      >
        <article>Tip Amount</article>
        <article>Total</article>
        <button type="reset" className="w-auto desktop:mt-auto">
          Reset
        </button>
      </section>
    </form>
  </Layout>
);

export const Head = () => <Seo title="Home" />;

export default IndexPage;
