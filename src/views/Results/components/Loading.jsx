const Loading = () => {

  return (
    <div
      className="
        w-full
        h-full
        flex
        flex-col
        justify-center
        items-center
        gap-2
      "
    >
      <div
        className="
          border-t-transparent
          w-16
          h-16
          border-4 
          border-red-400 
          rounded-full 
          animate-spin
        "
      />
      <p className="font-poppins">Buscando...</p>
    </div>
  );
}

export default Loading;