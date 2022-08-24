// import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: "2nnfhbhi",
  dataset: "production",
  useCdn: "true",
  apiVersion: "2021-10-21",
  token: "skK5IO3C1I8Zyw0s9kTwyCBuwfGRkTrce5q20A8EUraB1Pscq2JSJkbS16tJKb73fboSDnbxlBwFj7ApXKTWhAvoufqnuqZn3kM6QFsHAuLQtjLGjJX6JM3pKgm9Fp4bxiCt6qoU1L8YnsqoCvxaBxApZ7F7M0FsFDM5FljbJRU0MWDvA6kF",
  useCdn: true,
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)

export default client
