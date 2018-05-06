export default function _urlToId (url) {
  let reg = new RegExp(/(\d+)/)
  let id = reg.exec(url)
  return id[0]
}
