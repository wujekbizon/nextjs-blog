'use client'
import styles from './PostContent.module.css'
import PostHeader from './PostHeader'
import { PostItemType } from '@/types/postsTypes'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import ts from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript'
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx'
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx'
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash'
import cpp from 'react-syntax-highlighter/dist/cjs/languages/prism/cpp'

SyntaxHighlighter.registerLanguage('bash', bash)
SyntaxHighlighter.registerLanguage('js', js)
SyntaxHighlighter.registerLanguage('ts', ts)
SyntaxHighlighter.registerLanguage('tsx', tsx)
SyntaxHighlighter.registerLanguage('jsx', jsx)
SyntaxHighlighter.registerLanguage('cpp', cpp)

const PostContent: React.FC<PostItemType> = (post) => {
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
              width={800}
              height={400}
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
        // @ts-ignore
        <SyntaxHighlighter style={language == 'cpp' ? coldarkDark : vscDarkPlus} language={language}>
          {children}
        </SyntaxHighlighter>
      )
    },
  }

  return (
    <article className={styles.content}>
      <PostHeader title={post.data.title || ''} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  )
}
export default PostContent
