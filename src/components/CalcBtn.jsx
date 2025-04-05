

const CalcBtn = ({ item, btnFunction }) => {
    let myCls = "bg-input-btn-bg text-input-btn-text shadow-input-shadow ";
    if (item === "reset") {
        myCls = "col-span-2 shadow-reset-shadow text-reset-btn-text bg-reset-btn-bg ";
    } else if (item === "=") {
        myCls = "col-span-2 shadow-equal-shadow text-equal-btn-text bg-equal-btn-bg ";
    }
    return (
        <input
        type="button"
        value={item}
        key={item}
        className={`${myCls} font-bold text-[32px] h-[50px] border-none rounded-[10px] `}
        onClick={(val) => btnFunction(val, item)}
        id={item === "=" ? "equal" : item}
      />
    );
};

export default CalcBtn;