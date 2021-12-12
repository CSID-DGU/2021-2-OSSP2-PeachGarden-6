import App, { Container } from "next/app";
import Head from "next/head";
import React, { useEffect } from "react";
import { RecoilRoot } from "recoil";
import styled from "styled-components";
import { localStorage } from "window-or-global";
import Header from "../components/Header";
import { colors } from "../constants/colors";

const Root = (props) => {
  const { store, pageProps, Component, router } = props;

  const comparePath = router.route.indexOf("compare");
  const comparePath2 = router.route.indexOf("single");

  useEffect(() => {}, []);

  return (
    <RecoilRoot>
      <Container>
        {comparePath === -1 && comparePath2 === -1 ? (
          <>
            <Head>
              <title>Player-Battle</title>
            </Head>
            <Header />
            <MainSection>
              <MainArea>
                <Component {...pageProps} />
              </MainArea>
            </MainSection>
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

const MainSection = styled.main`
  width: 100%;
  height: calc(100vh - 102px);
  margin-top: 102px;
  overflow-y: scroll;
  & ::-webkit-scrollbar {
    width: 1px;
  }
  & ::-webkit-scrollbar-thumb {
    width: 4px;
    background-color: ${colors.black};
  }
  & ::-webkit-scrollbar-track {
    width: 1px;
  }
`;

const MainArea = styled.div`
  position: relative;
  width: 900px;
  margin: 0 auto;
  padding: 20px 0;
`;

export default Root;
