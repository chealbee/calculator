import { useState } from "react";

const buttons = {
  numberButtons: [
    { val: "1" },
    { val: "2" },
    { val: "3" },
    { val: "4" },
    { val: "5" },
    { val: "6" },
    { val: "7" },
    { val: "8" },
    { val: "9" },
    { val: "0" },
  ],
  actionsButtons: [{ val: "CE" }, { val: "C" }, { val: "=" }],
  operetionButtons: ["+", "-", "/", "*", "^"],
};

export default function Home() {
  const [defval, defsetVal] = useState("");
  const cklikToButton = (val: string) => {
    console.log(buttons.operetionButtons.slice(-1));

    if (
      (buttons.operetionButtons.includes(val) && defval === "") ||
      (buttons.operetionButtons.includes(val) &&
        buttons.operetionButtons.includes(defval.slice(-1)))
    ) {
      return;
    } else {
      defsetVal(defval + val);
    }
  };

  const clikToMathOperation = (val: string) => {
    if (val === "CE" && defval.length) {
      defsetVal(defval.slice(0, -1));
    }
    if (val === "C" && defval.length) {
      defsetVal("");
    }
    if (val === "=" && defval.length) {
      defsetVal(eval(defval).toString());
    }
  };
  return (
    <div className="wraper">
      <div className="container">
        <input placeholder={"0"} value={defval} />
        <div className="buttons">
          {buttons.numberButtons.map((ell) => (
            <button key={ell.val} onClick={() => cklikToButton(ell.val)}>
              {ell.val}
            </button>
          ))}
          {buttons.operetionButtons.map((ell) => (
            <button key={ell} onClick={() => cklikToButton(ell)}>
              {ell}
            </button>
          ))}
          {buttons.actionsButtons.map((ell) => (
            <button
              className={ell.val === "=" ? "big" : ""}
              key={ell.val}
              onClick={() => clikToMathOperation(ell.val)}
            >
              {ell.val}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
