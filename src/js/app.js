// TODO: write your code here
import sum from './basic';

console.log('worked');
console.log(sum([1, 2]));

export default function specAttack({ special }) {
  return special.map(({
    id, name, icon, description,
  }) => ({
    id,
    name,
    icon,
    description: description || 'Описание недоступно',
  }
  ));
}
