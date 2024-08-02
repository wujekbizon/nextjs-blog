import { dislikePostAction } from '@/actions/actions'
import { EMPTY_FORM_STATE } from '@/constants/formState'
import { useToastMessage } from '@/hooks/useToastMessage'
import { usePostLikes } from '@/store/usePostsLikes'
import { useActionState } from 'react'
import { SlDislike } from 'react-icons/sl'

export default function DislikePostForm({ title }: { title: string }) {
  const [formState, action] = useActionState(dislikePostAction, EMPTY_FORM_STATE)
  const { dislikes, hasLiked, hasDisliked, toggleDislike } = usePostLikes()
  const noScriptFallback = useToastMessage(formState)
  return (
    <form className="flex items-center gap-3" action={action}>
      <div className="flex items-center gap-2">
        <button
          className="disabled:opacity-60 disabled:cursor-not-allowed"
          disabled={hasLiked || formState.status === 'SUCCESS'}
          name={title}
        >
          <SlDislike color={`${hasDisliked ? '#ff4412cc' : '#a7a2a2'}`} onClick={() => toggleDislike()} />
        </button>
        <span className="text-base text-zinc-400">{dislikes}</span>
      </div>
      {noScriptFallback}
    </form>
  )
}
