'use client'

import { likePostAction } from '@/actions/actions'
import { EMPTY_FORM_STATE } from '@/constants/formState'
import { useToastMessage } from '@/hooks/useToastMessage'
import { usePostLikes } from '@/store/usePostsLikes'
import { useActionState } from 'react'
import { SlLike } from 'react-icons/sl'

export default function LikePostForm({ title }: { title: string }) {
  const [formState, action] = useActionState(likePostAction, EMPTY_FORM_STATE)
  const { likes, hasLiked, hasDisliked, toggleLike } = usePostLikes()
  const noScriptFallback = useToastMessage(formState)

  return (
    <form className="flex items-center gap-3" action={action}>
      <div className="flex items-center gap-2">
        <button
          type="submit"
          className="disabled:opacity-60 disabled:cursor-not-allowed"
          disabled={hasDisliked || formState.status === 'SUCCESS'}
          name={title}
        >
          <SlLike color={`${hasLiked ? '#43ff64d9' : '#a7a2a2'}`} onClick={() => toggleLike()}  />
        </button>
        <span className="text-base text-zinc-400">{likes}</span>
      </div>
      {noScriptFallback}
    </form>
  )
}
