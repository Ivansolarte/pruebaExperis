import { useState, useEffect } from "react";

export const Tables = ({ title = [], data = [] }) => {
  const [rango, setRango] = useState(0);

  useEffect(() => {
    setRango((title.length).toString());

    return () => {};
  }, [title.length]);

  console.log(`grid grid-cols-${rango.toString()} border border-slate-800 `);

  return (
    <>
      <div className="border w-[90%] mt-10 ">
        <div
          className={`grid grid-cols-4 border border-slate-800 `}
        >
          {title.map((item, index) => (
            <div key={index} className=" border flex justify-center bg-slate-400">
              <p className="text-black uppercase font-bold my-2">{item}</p>
            </div>
          ))}
        </div>
        <div
          className="h-[680px] overflow-auto "
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            overflow: "auto",
          }}
        >
          {title.length > 0 &&
            data.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-${rango.toString()} ${index%2 ==0&&" bg-slate-50"} border border-slate-400  `}
              >
                {row.map((item, i) => (
                  <div key={i} className={`border-l-[1px]  border-slate-400 flex justify-center `}>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
