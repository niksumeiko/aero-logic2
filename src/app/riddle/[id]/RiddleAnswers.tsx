'use client';

import { useMemo, useState } from 'react';
import { getAnswerFor } from 'riddle-exam';
import { Riddle } from '../../domain/RiddleService';
import classNames from 'classnames';

type Props = {
  riddle: Riddle;
};

export const RiddleAnswers = ({ riddle }: Props) => {
  const [correct, setCorrect] = useState<{ id: string }>();
  const [selected, setSelected] = useState<string>()
  const handleClick = async (id: string) => {
    setSelected(id);

    const data = await getAnswerFor(riddle.id);

    setCorrect(data);
  };

  const sorted = useMemo(() => riddle.answers.toSorted(() => Math.random() - 0.5), [riddle.answers]);

  return (
    <>
      <p className="mb-5">Possible answers:</p>
      <ul>
        {sorted.map((answer) => (
          <li
            key={answer.id}
            onClick={() => handleClick(answer.id)}
            className={classNames('border py-2 pl-3 pr-2 my-1', {
              'cursor-pointer': !selected,
              'border-blue-500': !correct,
              "border-green-700 text-green-900 before:content-['✓']": selected === answer.id && correct && correct.id === answer.id,
              "border-red-700 text-red-800  before:content-['✗']": selected === answer.id && correct && correct.id !== answer.id
            })}
          >
            <span className="pl-2">{answer.text}</span>
          </li>
        ))}
      </ul>
      {selected && correct && selected === correct.id && (
        <div className="bg-green-400 my-6 p-3">{"Great job! You're right 🙏"}</div>
      )}
      {selected && correct && selected !== correct.id && (
        <div className="bg-red-300  my-6 p-3">{'This time your answer is wrong.'}</div>
      )}
    </>
  );
}