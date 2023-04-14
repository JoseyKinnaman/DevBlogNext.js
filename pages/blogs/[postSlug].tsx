import { GetStaticProps, NextPage } from 'next';


interface Props {}

const SinglePage: NextPage<Props> = () => {
  return <div>SinglePage</div>;
};
export const getStaticProps: GetStaticProps = () => {
  return{
    props: {},
  };
};

export default SinglePage;
