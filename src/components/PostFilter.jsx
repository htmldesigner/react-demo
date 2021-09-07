import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        placeholder="Поиск..."
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />

      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Сотрировка"
        options={[
          { value: "title", name: "по названию" },
          { value: "desc", name: "по описанию" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
