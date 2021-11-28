import { memo } from "react";
import styled from "styled-components";
import Link from "next/link";

const NAVIGATION_LIST = [
  {
    text: "Main",
    href: "/",
  },
  {
    text: "선수 검색",
    href: "/search",
  },
  {
    text: "팀 기록",
    href: "/team",
  },
  {
    text: "선수 칭호",
    href: "/style",
  },
];

const Navigation = () => {
  return (
    <NavigationDiv>
      {NAVIGATION_LIST.map(({ text, href }, index) => (
        <NavButton text={text} href={href} key={index} />
      ))}
    </NavigationDiv>
  );
};

const NavButton = ({ text, href }) => {
  return (
    <Link href={href}>
      <NavButtonButton>{text}</NavButtonButton>
    </Link>
  );
};

const NavigationDiv = styled.div`
  width: 800px;
  padding: 0 calc(50% - 400px);
  height: fit-content;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
`;

const NavButtonButton = styled.button`
  width: 200px;
  padding: 10px;
  font-size: 14px;
  color: #ffffff;
  text-align: center;
  border: unset;
  background-color: unset;
`;

export default memo(Navigation);
