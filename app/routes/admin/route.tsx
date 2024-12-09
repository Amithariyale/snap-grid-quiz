import DraggableItem from "~/components/DraggableItem";
import DroppableGrid from "~/components/DroppableGrid";
import { useState } from "react";

// export async function action({ request }: { request: Request }) {
//   const formData = await request.formData();
//   const gridState = JSON.parse(formData.get("gridState"));

//   await db.gridComponent.createMany({
//     data: gridState.map((item) => ({
//       type: item.type,
//       position: JSON.stringify(item.position),
//       config: item.config || {},
//     })),
//   });

//   return null;
// }

export default function Admin() {
  const [grid, setGrid] = useState<Object[]>([]);

  const handleDrop = (item: React.ReactNode) => {
    setGrid([...grid, { item, position: [1, 1] }]); // Add mock position
  };

  return (
    // <div className="flex">
    //   {/* Navigation Drawer */}
    //   <div className="w-1/4 bg-gray-100 p-4">
    //     <h2>Components</h2>
    //     <DraggableItem type="progress-bar">
    //       <h1>Progress bar</h1>
    //     </DraggableItem>
    //     <DraggableItem type="timer">
    //       <h1>Timer</h1>
    //     </DraggableItem>
    //     <DraggableItem type="question">
    //       <h1>Question </h1>
    //     </DraggableItem>
    //   </div>

    //   {/* Grid */}
    //   <div className="w-3/4">
    //     <DroppableGrid onDrop={handleDrop} />
    //   </div>
    // </div>
    <>{/* <AppSidebar /> */}</>
  );
}
