import { Riddle } from '../../domain/RiddleService';
import { RiddleAnswers } from './RiddleAnswers';

export default async function RiddlePage({ params }: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  const response = await fetch(`http://localhost:3000/api/riddle/${id}`)
  const riddle: Riddle = await response.json()

  return (
    <main className="text-lg">
      <p
        dangerouslySetInnerHTML={{ __html: riddle.contents }}
        className="mb-16"
      />
      <RiddleAnswers riddle={riddle} />
    </main>
  );
}