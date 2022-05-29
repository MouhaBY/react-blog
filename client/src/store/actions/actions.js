import * as ACTION_TYPES from './action_types';

export const SUCCESS = {
    type : ACTION_TYPES.SUCCESS
}

export const FAILURE = {
    type : ACTION_TYPES.FAILURE
}

export const add_profile = (profile) => {
    return {
      type: ACTION_TYPES.ADD_PROFILE,
      payload: profile
    }
  }
  
  export const remove_profile = () => {
    return {
      type: ACTION_TYPES.REMOVE_PROFILE
    }
  }
  
  
  export const set_db_profile = (profile) => {
    return {
      type: ACTION_TYPES.SET_DB_PROFILE,
      payload: profile
    }
  }
  
  export const remove_db_profile = () => {
    return {
      type: ACTION_TYPES.REMOVE_DB_PROFILE
    }
  }
  
  export const fetch_db_posts = (posts) => {
    return {
      type: ACTION_TYPES.FETCH_DB_POSTS,
      payload: posts
    }
  }
  
  export const remove_db_posts = () => {
    return {
      type: ACTION_TYPES.REMOVE_DB_POSTS
    }
  }
  
  
  export const fetch_post_comments = (comments) => {
    return {
      type: ACTION_TYPES.FETCH_POST_COMMENTS,
      payload: comments
    }
  }
  
  export const remove_post_comments = () => {
    return {
      type: ACTION_TYPES.REMOVE_POST_COMMENTS
    }
  }