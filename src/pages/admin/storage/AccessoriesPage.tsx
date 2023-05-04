import AccessoriesList from "@/components/admin/storage/accessoriesList/AccessoriesList";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getAll, remove } from "@/redux/actions/storage/accessories";
import { getAll as getAllEquipment } from "@/redux/actions/storage/equipment";
import { useEffect, useState } from "react";
import AccentButton from "@/elements/buttons/AccentButton";
import { Tag, TagGroup } from "rsuite";
import useDidMountEffect from "@/hooks/useDidMountEffect";
import SearchInput from "@/elements/inputs/SearchInput";

function AccessoriesPage() {
  const dispatch = useAppDispatch();
  const [activePage, setActivePage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const { accessories, total } = useAppSelector((state) => state.accessories);
  const { equipment } = useAppSelector((state) => state.equipment);

  const equipmentIds = equipment.reduce((target, key) => {
    target[key.type] = key.id;
    return target;
  }, {});

  const [tags, setTags] = useState([]);
  const [filterTags, setFilterTags] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterQuery, setFilterQuery] = useState("");

  function loadAll() {
    dispatch(getAll({ limit, offset }));
    dispatch(getAllEquipment());
  }
  useEffect(loadAll, [dispatch]);

  useDidMountEffect(() => {
    const equipmentTypes = equipment.map((x) => x.type);
    setFilterTags(equipmentTypes);
    setTags(equipmentTypes.filter((x) => filterTags.includes(x)));
  }, [equipment]);

  useEffect(() => {
    console.log(searchQuery, filterQuery);
    dispatch(getAll({ limit, offset, searchQuery, filterQuery }));
  }, [searchQuery, filterQuery]);

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log(value);
    // const newOffset = (value - 1) * limit;
    const newOffset = value * limit;
    setActivePage(value);
    setOffset(newOffset);
    dispatch(getAll({ limit, offset: newOffset, searchQuery, filterQuery }));
  };

  const handleRemove = (id: number) => {
    dispatch(remove(id));
  };

  const removeTag = (tag) => {
    const filterTagsArr = filterTags.filter((item) => item !== tag);
    setFilterTags(filterTagsArr);
    setTags([tag, ...tags]);
    setFilterQuery(filterTagsArr.map((x) => equipmentIds[x]).join(","));
  };

  const addTag = (tag) => {
    const filterTagsArr = [tag, ...filterTags];
    setTags(tags.filter((item) => item !== tag));
    setFilterTags([tag, ...filterTags]);
    setFilterQuery(filterTagsArr.map((x) => equipmentIds[x]).join(","));
  };

  const commitInputChanges = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="container w-full">
      <div className="py-8">
        <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
          <div className="flex items-end gap-5 justify-between w-full">
            {/* <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-full md:space-x-3 space-y-3 md:space-y-0 justify-center"> */}
            {/* <div className=" relative ">
                <input
                  type="text"
                  id='"form-subscribe-Filter'
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-transparent"
                  placeholder="Наименование"
                />
              </div> */}
            {/* <AccentButton to="" title="Фильтр" /> */}

            <AccentButton to="create" title="Добавить" />

            {/* <ButtonWithIcon to="" alt="Импорт" icon={importIcon} /> */}
            <div className="flex flex-1 flex-end flex-col gap-5 text-start">
              <TagGroup className="h-5">
                {filterTags.map((item, index) => (
                  <Tag key={index} closable onClose={() => removeTag(item)} color="green">
                    {item}
                  </Tag>
                ))}
              </TagGroup>
              <TagGroup className="h-5">
                {tags.map((item, index) => (
                  <Tag key={index} onClick={() => addTag(item)} className="cursor-pointer">
                    {item}
                  </Tag>
                ))}
              </TagGroup>
            </div>
            <div className="text-end flex-end">
              <SearchInput searchQuery={searchQuery} commitInputChanges={commitInputChanges} />
            </div>
            {/* </form> */}
          </div>
        </div>
      </div>
      <AccessoriesList
        accessories={accessories}
        handleRemove={(id) => handleRemove(id)}
        handlePageChange={handleChangePage}
        total={total || 10}
        pageSize={limit}
        page={activePage}
        searchQuery={searchQuery}
        filterQuery={filterQuery}
      />
    </div>
  );
}

export default AccessoriesPage;
