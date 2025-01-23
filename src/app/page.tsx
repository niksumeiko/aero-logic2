import {
  RandomRiddleEntryControl,
} from './RandomRiddleEntryControl';

export default function Home() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // +1 because months are 0-indexed
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const hoursStr = Number(hours);
  const minutes = String(date.getMinutes()).padStart(2, '0');
  let workInterval = 'Busy Times';

  if (hoursStr >= 11 && hoursStr > 17) {
    workInterval = 'Easy jets';
  } else if (hoursStr >= 17 && hoursStr < 23) {
    workInterval = 'Returning pips';
  } else if (hoursStr >= 23 && hoursStr < 5) {
    workInterval = 'Sleepies';
  }

  return (
    <main className="text-lg">
      <div>
        <p>Work Interval: {workInterval}</p>
        <p>Timestamp: {year}-{month}-{day} {hours}{minutes}</p>
        <div className="p-20 text-center">
          <RandomRiddleEntryControl />
        </div>
      </div>
    </main>
  );
}
