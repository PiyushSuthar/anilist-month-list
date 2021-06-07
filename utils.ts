import { IResponse } from './types.ts'

const query = `query ($username: String){
  MediaListCollection(userName: $username type: ANIME){
    lists {
      name
      status
      entries {
        id
        startedAt {
          year
          month
          day
        }
        completedAt{
          year
          month
          day
        }
        
        createdAt
        progress
        media{
          title {
            romaji
            english
            native
            userPreferred
          }
        }
      }
    }
  }
}`

export const fetchData = async (username: string): Promise<IResponse> => {
  const res = await fetch('https://graphql.anilist.co', {
    method: "post",
    body: JSON.stringify({
      query,
      variables: {
        username
      }
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })

  return await res.json()
}