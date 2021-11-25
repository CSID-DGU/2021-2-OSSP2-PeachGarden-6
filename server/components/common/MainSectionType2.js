import TitleBadge from "../Badge/TitleBadge";
import BasicTable from "../graph/BasicTable";
import { MainSectionDiv } from "./MainSectionType1";

const MainSectionType2 = ({ text, columnList, parentIndex, data }) => {
  return (
    <MainSectionDiv>
      <TitleBadge text={text} />
      <BasicTable columnList={columnList} parentIndex={parentIndex} data={data}/>
    </MainSectionDiv>
  );
};
export default MainSectionType2;
