import { create } from 'zustand'

interface PostsLikesState {
  likes: number
  dislikes: number
  hasLiked: boolean
  hasDisliked: boolean
  toggleLike: () => void
  toggleDislike: () => void
}

export const usePostLikes = create<PostsLikesState>((set) => ({
  likes: 0,
  dislikes: 0,
  // Use separate booleans for like and dislike state
  hasLiked: false,
  hasDisliked: false,
  toggleLike: () =>
    set((state) => ({
      likes: state.hasLiked ? state.likes - 1 : state.likes + 1,
      hasLiked: !state.hasLiked,
    })),
  toggleDislike: () =>
    set((state) => ({
      dislikes: state.hasDisliked ? state.dislikes - 1 : state.dislikes + 1,
      hasDisliked: !state.hasDisliked,
    })),
}))
