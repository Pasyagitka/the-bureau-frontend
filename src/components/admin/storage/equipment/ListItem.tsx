function ListItem({ id, type, mounting }: { id: number; type: string; mounting: string }) {
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <p className="text-gray-900 whitespace-no-wrap">{id}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{type}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{mounting}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <a href="#" className="text-lime-600 hover:text-lime-900">
          Edit
        </a>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <a href="#" className="text-red-600 hover:text-red-900">
          Delete
        </a>
      </td>
    </tr>
  );
}

export default ListItem;