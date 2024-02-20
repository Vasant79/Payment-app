import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { personAtom } from "../../store/atom";

export default function SendMoney({ firstname }) {
  const navigate = useNavigate();
  let setPerson = useSetRecoilState(personAtom);

  function handleClick() {
    //update atom -- person to whom money will be transfered
    setPerson(firstname);
    navigate("/send");
  }

  return (
    <div>
      <Button onClick={handleClick}>Transfer Money</Button>
    </div>
  );
}
