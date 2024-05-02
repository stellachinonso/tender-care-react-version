
export const SubmitButton = ({ text, action, activate, white }) => {
  return (
    <>
      {white ?
        (
          <button
            onClick={(e) => {
              e.preventDefault();
              action()
            }}
            className={` w-full h-[38px] ${activate ? "bg-white text-[#090909] border-[#090909]" : "bg-white text-[#0909098c] border-[#09090983]"} hover:opacity-90 flex justify-center items-center gap-x-2 font-normal mt-7 rounded-[4px] text-xs border `}
            disabled={!activate}
          >
            {text}
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              action()
            }}
            className={` w-full h-[38px] ${activate ? "bg-[#C43F76] text-white" : "bg-[#c2739459] text-[#ffffff80]"} hover:opacity-90 flex justify-center items-center gap-x-2 font-normal mt-7 rounded-[4px] text-xs`}
            disabled={!activate}
          >
            {text}
          </button>
        )}
    </>
  )
}