
import { Card } from 'flowbite-react';

function Comment({text, author}) {
  return (
    <Card
    className="max-w-sm"
    href="#"
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      <p>
        {text}
      </p>
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      <p>
      {author}
      </p>
    </p>
  </Card>
  )
}

export default Comment