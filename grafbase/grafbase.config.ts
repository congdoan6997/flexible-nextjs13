import { g, auth, config } from '@grafbase/sdk'

const User = g.model("User", {
  name: g.string().length({min:2, max:20}),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedInUrl : g.url().optional(),
  projects: g.relation(() => Project).list().optional(),

})

const Project = g.model("Project", {
  name: g.string().length({min:3}),
  description: g.string(),
  image: g.string(),
  githubUrl: g.string(),
  category: g.string().search(),
  createdBy: g.relation(() => User)
})
const jwt = auth.JWT({
  issuer: 'grafbase',
  secret: '08PWFQwRg06FiimRydd+1NzW5VhNXVvFG8pK7AjvAa0='
})
export default config({
  schema: g
})
