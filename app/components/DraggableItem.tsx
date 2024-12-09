import { useDrag } from "react-dnd";

export default function DraggableItem({
  type,
  children,
}: {
  type: string;
  children: React.ReactNode;
}) {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={dragRef}
      className={`p-4 bg-gray-200 border ${isDragging ? "opacity-50" : ""}`}
    >
      {children}
    </div>
  );
}
