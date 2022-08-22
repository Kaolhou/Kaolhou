
/**
 * @param {number|string} date
 * @returns {string|number}
 */
export default function isLessThan10(date:number){
    if((!date) && (isNaN(+date))) throw new Error('please insert a valid number')
    if(date<10){
        return `0${Math.trunc(date)}`
    }
    return Math.trunc(date)
}