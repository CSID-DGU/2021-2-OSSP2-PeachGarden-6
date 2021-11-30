import App, { Container } from "next/app";
import Head from "next/head";
import React, { useEffect } from "react";
import { RecoilRoot } from "recoil";
import styled from "styled-components";
import { localStorage } from "window-or-global";
import Header from "../components/Header";

const Root = (props) => {
  const { store, pageProps, Component, router } = props;

  const comparePath = router.route.indexOf("compare");

  useEffect(() => {}, []);

  return (
    <RecoilRoot>
      <Container>
        {comparePath === -1 ? (
          <>
            <Head>
              <title>Static Website</title>
            </Head>
            <Header />
            <MainArea>
              <Component {...pageProps} />
            </MainArea>
          </>
        ) : (
          <>
          <Head>
            <title>비교 결과</title>
          </Head>
          <Component {...pageProps} />
          </>
        )}
        {/* <footer>Footer</footer> */}
      </Container>
    </RecoilRoot>
  );
};

Root.defaultProps = {
  pageProps: {},
};

Root.getInitialProps = async (context) => {
  let pageProps = {};
  const { ctx } = context;

  if (context.Component.getInitialProps) {
    pageProps = await context.Component.getInitialProps(ctx);
  }

  return {
    pageProps,
  };
};

const MainArea = styled.div`
  position: relative;
  width: 800px;
  padding: 102px calc(50% - 400px);
`;

export default Root;
