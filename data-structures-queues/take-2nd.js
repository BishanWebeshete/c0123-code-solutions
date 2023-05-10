export default function take2nd(queue) {
  if (queue.peek() !== undefined) {
    const first = queue.dequeue();
    queue.enqueue(first);
    return queue.dequeue();
  }
}
