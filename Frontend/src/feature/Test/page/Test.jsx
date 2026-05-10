import { useSelector } from "react-redux";
import { useTest } from "../hook/useTest";

const Test = () => {
  const { handleGetData } = useTest();
  const { data } = useSelector((state) => state.test);

  return (
    <div>
      <button onClick={() => handleGetData()}>fetch Data</button>
      {data}
    </div>
  );
};

export default Test;
