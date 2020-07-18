export default function({ $auth, redirect }) {
  if (!!$auth.$state.user?.admin === false) {
    redirect('/')
  }
}
