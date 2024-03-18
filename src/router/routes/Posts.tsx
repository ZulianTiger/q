import { useState } from "react";
import TextInput from "../../components/TextInput";

export default function Posts() {
  const [search, setSearch] = useState("");

  const handleSearchChange = (newValue: string) => {
    setSearch(newValue);
  };

  return (
    <div>
      <h1>Posts page</h1>
      <TextInput
        value={search}
        placeholder="Search..."
        label="Search posts by username"
        onValueChange={handleSearchChange}
      />
    </div>
  );
}
