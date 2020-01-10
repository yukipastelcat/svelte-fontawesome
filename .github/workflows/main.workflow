workflow "publish on release" {
  on = "release"
  resolves = ["publish"]
}

workflow "build" {
  on = "push"
  resolves = ["build"]
}

action "build" {
  uses = "actions/npm@master"
  args = "ci"
}

action "publish" {
  uses = "actions/npm@master"
  args = "publish"
  secrets = ["NPM_AUTH_TOKEN"]
}
