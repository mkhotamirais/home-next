export const CreateImageForm = () => {
  return (
    <form action="">
      <input type="title" name="title" placeholder="title" className="p-2 rounded" />
      <input
        title="image"
        type="file"
        name="image"
        className="file:py-2 file:px-4 file:mr-4 file:rounded-sm hover:file:bg-gray-300"
      />
    </form>
  );
};
