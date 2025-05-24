//Padding suggested by chat gpt to keep text consistent and avoid flickering --start--
const pad = (n: number) => n.toString().padStart(2, '0');
//Padding suggested by chat gpt to keep text consistent and avoid flickering --end--

const getDate = (date:Date) => {
    return date.toLocaleDateString()
}

const getTime = (date:Date) => {
    return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`
}

export default {getDate, getTime};