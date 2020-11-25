import moment from 'moment'

// 获取文件后缀
function getFileType (filePath) {
  console.log(filePath)
  if (!filePath) {
    return false
  }
  var startIndex = filePath.lastIndexOf('.')
  if (startIndex !== -1) {
    return filePath.substring(startIndex + 1, filePath.length).toLowerCase()
  } else {
    return ''
  }
}

let formatDate = time => {
  if (!time) {
    return '——'
  } else {
    time = new Date(Number(time + '000'))
    var date = moment(time).format('YYYY-MM-DD hh:mm:ss')
    return date
  }
}

// 控制音频同时只播放一个
let handlePlay = (event) => {
  console.log(888)
  console.log(event)
  let audios = document.getElementsByTagName('audio')
  const videoElement = audios
  if (videoElement && videoElement.length > 0) {
    for (let i = 0; i < videoElement.length; i++) {
      if (videoElement[i] !== event.target) {
        videoElement[i].pause()
      }
    }
  }
}

export default {
  getFileType,
  formatDate,
  handlePlay
}
