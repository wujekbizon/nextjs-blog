import styles from './PostContent.module.css'
import PostHeader from './PostHeader'
import { PostProps } from '../../../types/postsTypes'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import duotoneSpace from 'react-syntax-highlighter/dist/cjs/styles/prism/duotone-space'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import ts from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript'
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx'
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx'

SyntaxHighlighter.registerLanguage('js', js)
SyntaxHighlighter.registerLanguage('ts', ts)
SyntaxHighlighter.registerLanguage('tsx', tsx)
SyntaxHighlighter.registerLanguage('jsx', jsx)

const PostContent = ({ post }: PostProps) => {
  const imagePath = `/images/posts/${post.slug}/${post.data.image}`

  const customRenderers = {
    p(props: any) {
      const { node } = props
      const image = node.children[0]

      if (image.type === 'element' && image.tagName === 'img') {
        return (
          <div className={styles.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={400}
              style={{ width: '100%', height: 'auto' }}
              priority
            />
          </div>
        )
      }
      return <p>{props.children}</p>
    },

    code(code: any) {
      const { className, children } = code
      const language = className.split('-')[1] // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter style={duotoneSpace} language={language}>
          {children}
        </SyntaxHighlighter>
      )
    }
  }

  return (
    <article className={styles.content}>
      <PostHeader title={post.data.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  )
}
export default PostContent
