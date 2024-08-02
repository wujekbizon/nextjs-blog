'use client'

import Image from 'next/image'
import LikePostForm from '@/components/ui/LikePostForm'
import DislikePostForm from '@/components/ui/DislikePostForm'

const PostHeader = ({ title, image }: { title: string; image: string }) => {
  return (
    <header className="flex items-center flex-col gap-4 mb-8">
      <h1 className="text-2xl md:text-5xl">{title}</h1>
      <div className="w-full md:w-5/6 h-[200px] md:h-[400px]">
        <Image src={image} alt={title} width={500} height={500} className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm text-zinc-300">Author: </span>
          <p>Grzegorz Wolfinger</p>
        </div>
        <div className="flex items-center gap-3">
          <LikePostForm title={title} />
          <DislikePostForm title={title} />
        </div>
      </div>
    </header>
  )
}
export default PostHeader
