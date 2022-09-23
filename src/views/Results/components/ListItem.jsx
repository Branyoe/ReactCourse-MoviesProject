const ListItem = ({ id, image, title, onListItemClick }) => {

  const handleListItemClick = () => {
    let textForReplace = '/title/';
    if(id.includes('/name/')) textForReplace = '/name/';
    onListItemClick(id.replace(textForReplace, '').replace('/', ''));
  }

  return (
    <div
      className=" p-2 flex w-full min-w-fit"
    >
      <div className="w-3/12 bg-black">
        <img
          src={image?.url}
          alt={image?.url}
          className="object-cover shadow-lg"
        />
      </div>
      <div className="w-9/12 flex flex-col items-start justify-center p-5 gap-4">
        <h2 className="font-poppins font-medium text-xl">
          {title ?? "..."}
        </h2>
        <div className="font-poppins font-normal">
          <button
            className="border-red-400 border-2 rounded-md w-40 h-9 text-red-400 hover:bg-red-400 transition-colors hover:text-white"
            onClick={handleListItemClick}
          >
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListItem;