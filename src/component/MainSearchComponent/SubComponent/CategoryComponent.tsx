interface IComponentWithCategoriesProps {}

interface CategoryComponentProps {
  title: string;
  icon?: string;
}

const listOfTags: CategoryComponentProps[] = [
  { title: "3d" },
  { title: "CopyWriting" },
];

/**
 * Component definition for the ComponentWithCategories component.
 *
 * @returns The ComponentWithCategories component.
 */
export default function ComponentWithCategories() {
  return (
    <div className="flex flex-wrap justify-center items-center">
      {listOfTags.map(({ title, icon }) => {
        return <CategoryComponent title={title} />;
      })}
    </div>
  );
}

/**
 * Component definition for the CategoryComponent component.
 *
 * @param props The proptypes for the component.
 * @returns The CategoryComponent component.
 */
interface CategoryComponentProps {
  title: string;
  icon?: string;
}

function CategoryComponent(props: CategoryComponentProps) {
  return (
    <div className=" p-3 m-3 text-lg border border-primary bg-secondary rounded-xl drop-shadow-xl hover:bg-green-500 cursor-pointer">
      {props.title}
    </div>
  );
}
