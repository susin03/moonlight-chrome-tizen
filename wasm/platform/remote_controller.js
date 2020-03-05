function remoteControllerHandler(e) {
  const keyCode = e.keyCode;
  switch (keyCode) {
  case tvKey.KEY_UP:
    Navigation.up();
    break;
  case tvKey.KEY_DOWN:
    Navigation.down();
    break;
  case tvKey.KEY_LEFT:
    Navigation.left();
    break;
  case tvKey.KEY_RIGHT:
    Navigation.right();
    break;
  case tvKey.KEY_ENTER:
  case tvKey.KEY_REMOTE_ENTER:
    Navigation.accept();
    break;
  case tvKey.KEY_RETURN:
    Navigation.back();
    break;
  }
}
