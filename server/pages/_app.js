import App, { Container } from "next/app";
import Head from "next/head";
import React from "react";
import { RecoilRoot } from "recoil";
import styled from "styled-components";
import Header from "../components/Header";

class Root extends App {
  render() {
    const { Component, pageProps, ...other } = this.props;
    return (
      <RecoilRoot>
        <Container>
          <Head>
            <title>Static Website</title>
          </Head>
          <Header />
          <MainArea>
            <Component {...pageProps} />
          </MainArea>
          {/* <footer>Footer</footer> */}
        </Container>
      </RecoilRoot>
    );
  }
}

const MainArea = styled.div`
  position: relative;
  width: 800px;
  padding: 102px calc(50% - 400px);
`;

export default Root;
