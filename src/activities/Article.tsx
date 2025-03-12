import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useFlow } from "../stackflow";

type ArticleParams = {
  params: {
    title: string;
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
        <h1>{title}</h1>
        <button onClick={onClickPop}>Del</button>
      </div>
    </AppScreen>
  );
};

export default Article;
