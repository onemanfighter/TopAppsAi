import { NavLink } from "react-router-dom";

export interface ICardComponentProps {
  categories: string[];
  title: string;
  tags: string[];
  description: string;
  image: string;
  path: string;
}

/**
 * Proptypes for the card component.
 */
export interface IMainCardComponentProps {
  data: ICardComponentProps;
}

/**
 * Component definition for the card component.
 *
 * @param props The proptypes for the component.
 * @returns The CardComponent component.
 */
export default function CardComponent(props: IMainCardComponentProps) {
  return (
    <div className=" min-w-52 bg bg-primary-content">
      <div className="card bordered shadow-xl rounded-md">
        <figure className=" relative h-48">
          <div className="card-actions flex flex-wrap w-full justify-start self-end m-2 z-30">
            {props.data.categories.map((category) => {
              return (
                <button className="btn glass rounded-full text-secondary-content transition-all ease-in-out duration-400">
                  <NavLink to={category}>{category}</NavLink>
                </button>
              );
            })}
          </div>
          <img
            src={props.data.image}
            alt="Placeholder image"
            className="rounded-t-lg absolute inset-0 z-0 w-full h-full object-cover"
            loading="lazy"
          />
        </figure>
        <div className="card-body">
          <div className="flex flex-wrap justify-start items-center">
            {props.data.tags.map((tag) => {
              return <TagComponent name={tag} />;
            })}
          </div>
          <h2 className="card-title">{props.data.title}</h2>
          <p>{props.data.description}</p>
          <button className="btn glass bg-secondary text-secondary-content rounded-full transition-all duration-200">
            <NavLink to={props.data.path}>Go to {props.data.title} AI</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}

function TagComponent(props: { name: string }) {
  return (
    <div className="badge badge-outline badge-info hover:badge-ghost p-4 mr-2 text-md cursor-pointer">
      {props.name}
    </div>
  );
}
