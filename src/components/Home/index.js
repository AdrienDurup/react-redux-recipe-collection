import { useSelector } from 'react-redux';

import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Content from 'src/components/Content';

const Home = () => {
  const { list } = useSelector((state) => state.recipes);

  return (
    <Page>
      <AppHeader />
      <Content
        title="Les recettes oRecipes"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo."
        recipes={list}
      />
    </Page>
  );
};

export default Home;
