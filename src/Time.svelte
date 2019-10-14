<script>
import { getWeekDay, getMonth, getMinutesAdd } from "./helpers/functionsForTime";

  const date = new Date();
 
  // День недели
  const dayOfWeek = getWeekDay(date);
  // Число
  const dayNumber = date.getDate();

  // Название месяца
  const nameOfMonth = getMonth(date);

  // Количество часов
  const numberOfHours = date.getHours();

  // Количество минут
  const numberOfMinutes = getMinutesAdd(date.getMinutes());

  // Часы-минуты в разных форматах
  let numberFormat = `${date.getHours()}:${numberOfMinutes} a.m.`;
  if (numberOfHours === 12) {
    numberFormat = `${date.getHours()}:${numberOfMinutes} p.m.`;
  } else if (numberOfHours > 12) {
    numberFormat = `${date.getHours() - 12}:${numberOfMinutes} p.m.`;
  }

</script>

<p class="time" title="сurrent time and date">
  Today is {dayOfWeek}. {dayNumber} {nameOfMonth}. {numberFormat}
</p>

<style>
  
.time {
  font-size: 16px;
  padding-top: 15px;
  padding-left: 15px;
}

@media screen and (max-width: 768px) {
  .time {
    display: flex;
    justify-content: center;
  }
}
</style>