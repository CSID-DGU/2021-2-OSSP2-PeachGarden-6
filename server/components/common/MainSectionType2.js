import TitleBadge from "../Badge/TitleBadge";
import BasicTable from "../graph/BasicTable";
import { MainSectionDiv, MainSectionDiv2 } from "./MainSectionType1";

const MainSectionType2 = ({ text, columnList, parentIndex, data , pageType}) => {
  return (
    pageType === `main`?
    <MainSectionDiv>
      <TitleBadge text={text} />
      <BasicTable columnList={columnList} parentIndex={parentIndex} data={data}/>
    </MainSectionDiv>
    :
    <MainSectionDiv2>
      <TitleBadge text={text} />
      <BasicTable columnList={columnList} parentIndex={parentIndex} data={data}/>
    </MainSectionDiv2>
  );
};
export default MainSectionType2;
