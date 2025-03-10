import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useFlow } from "../stackflow";

type ArticleParams = {
  params: {
    title: number[];
  };
};

const Article: React.FC<ArticleParams> = ({ params: { title } }) => {
  const { push, replace, pop } = useFlow();

  const onClickPop = () => {
    pop();
  };
  return (
    <AppScreen appBar={{ title: "Article" }}>
      <div>
        <h1>
          {title?.map((item) => (
            <em>{item}</em>
          ))}
        </h1>
        <button onClick={onClickPop}>Del</button>
      </div>
    </AppScreen>
  );
};

export default Article;
