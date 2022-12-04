import ToolsList from "@/components/storage/tools/ToolsList";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getAll } from "@/storage/actions/storage/tools";
import { RootState } from "@react-three/fiber";
import { useEffect } from "react";

function Tools() {
  const dispatch = useAppDispatch();

  const tools = useAppSelector((state: RootState) => state.tools.tools);

  function loadTools() {
    dispatch(getAll());
  }

  useEffect(loadTools, [dispatch]);

  return <ToolsList tools={tools} />;
}

export default Tools;
