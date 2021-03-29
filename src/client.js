// interacts with Sanity
import sanityClient from '@sanity/client'

// exports information from sanity portfolio project
export default sanityClient({
  projectId: "a79qfsse",
  dataset: "production"
})