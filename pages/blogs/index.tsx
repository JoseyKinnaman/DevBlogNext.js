import { InferGetStaticPropsType, GetStaticProps, NextPage } from 'next';
import BlogCard from  '../../components/BlogCard'
import { readPostsInfo } from '@/lib/helper';
import { PostApiResponse } from '@/utils/types';




type Props = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticProps = async () => {
  // const {postInfo}: PostApiResponse = await fetch('http://localhost:3000/api/posts').then(data => data.json())
  const postInfo: PostApiResponse = readPostsInfo()
  return {
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
