import PostContent from '@/components/posts/post-detail/PostContent'
import { getPostData } from '@/helpers/archiveUtils'

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const postDetail = await getPostData(slug)

  return {
    title: postDetail.data.title,
    description: postDetail.data.excerpt,
  }
}

const PostDetailsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const postDetail = await getPostData(slug)

  return (
    <section>
      <PostContent {...postDetail} />
      {!postDetail && <p>Loading...</p>}
    </section>
  )
}

export default PostDetailsPage
