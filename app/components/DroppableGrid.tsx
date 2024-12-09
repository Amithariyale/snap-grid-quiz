import { useDrop } from "react-dnd";

export default function DroppableGrid({
  onDrop,
}: {
  onDrop: (item: any) => void;
}) {
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: "component",
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={dropRef}
      className={`w-full h-full border ${isOver ? "bg-blue-200" : "bg-white"}`}
    ></div>
  );
}
