import { useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";

export async function loader() {
  const components = await db.gridComponent.findMany();
  return { components };
}

export default function Quiz() {
  // const { components } = useLoaderData();

  return (
    // <div>
    //   <h1>Quiz</h1>
    //   <div className="grid grid-cols-4 gap-4">
    //     {components.map((component) => (
    //       <div key={component.id} className="border p-4">
    //         {component.type}
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div>Hello from user side</div>
  );
}
