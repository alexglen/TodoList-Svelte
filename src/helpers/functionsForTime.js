/**
 * Функция возвращает день недели
 * @param {object} data - текущая дата new Date()
 * @returns {string}  - день недели
 */
export const getWeekDay = date => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    return days[date.getDay()];
  };
  
  /**
   * Функция возвращает название текущего месяца
   * @param {Object} currentData   - текущая дата new Date()
   * @returns {string}  - название текущего месяца
   */
  export const getMonth = currentData => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    return months[currentData.getMonth()];
  };
  
  /**
   * Функция возвращает количество минут в корректном формате (добавляется '0', если число < 10)
   * @param {number} minutes   - количество минут
   * @returns {string}  - количество минут
   */
  export const getMinutesAdd = minutes => {
    return minutes < 10 ? "0" + minutes : minutes;
  };  