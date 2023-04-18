import { InferGetStaticPropsType, GetStaticProps, NextPage } from 'next';
import BlogCard from  '../components/BlogCard'

interface PostApiResponse{
  postInfo:{
    title: string;
    slug: string;
    meta: string;
  }[];
}

type Props = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticProps = async () => {
  const {postInfo}: PostApiResponse = await fetch('http://localhost:3000/api/posts').then(data => data.json())
  return{
    props:{posts: postInfo}
  }
};

const BlogsPage: NextPage<Props> = ({posts}) => {

  return(
    <div className='max-w-3xl mx-auto p-5 space-y-5'>
      {posts.map(post => (
        <BlogCard key={post.slug} title={post.title} description={post.meta} slug={post.slug} />
      ))}
    </div>
  );
};

export default BlogsPage;
