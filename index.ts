import { parse } from "https://deno.land/std@0.83.0/flags/mod.ts";
import { fetchData } from './utils.ts'

const { username } = parse(Deno.args)

const data = await fetchData(username)

let text = ""

let TodaysDate = new Date()
let count = 1

data.data.MediaListCollection.lists.forEach((list, index) => {
  list.entries.forEach((entry, i) => {

    let ThisMonth = (1 + TodaysDate.getMonth())
    let PreviousMonth = TodaysDate.getMonth()

    let condition = entry.startedAt.month

    if ((condition === ThisMonth) || entry.completedAt.month === ThisMonth) {
      text += `${count}. ${entry.media.title.english || entry.media.title.native} \n`
      count++
    } else if ((condition === PreviousMonth) || entry.completedAt.month === PreviousMonth) {
      text += `${count}. ${entry.media.title.english || entry.media.title.native} \n`
      count++
    }
  })
})

console.log(text)