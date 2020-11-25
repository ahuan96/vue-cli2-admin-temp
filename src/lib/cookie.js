/**
 * [setcookie 封装SET方法]
 * @param  {[String]} key [键]
 * @param  {[String]} value [值]
 * @return {[]} []
 */
export function setcookie (key, value) {
  const days = 30
  const exp = new Date()
  exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000)

  document.cookie = key + '=' + escape(value) + ';expires=' + exp.toGMTString()
}

/**
 * [getcookie 封装GET方法]
 * @param  {[String]} key [键]
 * @return {[String]} [值]
 */
export function getcookie (key) {
  const reg = new RegExp('(^| )' + key + '=([^;]*)(;|$)')
  const arr = document.cookie.match(reg)

  const value = arr ? unescape(arr[2]) : null
  return value
}

/**
 * [delcookie 封装DEL方法]
 * @param  {[String]} key [键]
 * @return {[]} []
 */
export function delcookie (key) {
  const exp = new Date()
  exp.setTime(exp.getTime() - 1)

  const value = getcookie(key)
  if (value !== null) {
    document.cookie = key + '=' + value + ';expires=' + exp.toGMTString()
  }
}
