import specAttack from '../app';

describe('Attacks', () => {
  test('attacks with description', () => {
    const character = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
      special: [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://...',
          description: 'Двойной выстрел наносит двойной урон',
        },
        {
          id: 9,
          name: 'Нокаутирующий удар',
          icon: 'http://...',
          description: 'Нокаутирующий удар оглушает противника',
        },
      ],
    };

    const expected = [
      {
        id: 8,
        name: 'Двойной выстрел',
        description: 'Двойной выстрел наносит двойной урон',
        icon: 'http://...',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        description: 'Нокаутирующий удар оглушает противника',
        icon: 'http://...',
      },
    ];

    expect(specAttack(character)).toEqual(expected);
  });

  test('attacks with missing description', () => {
    const character = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
      special: [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://...',
          description: 'Двойной выстрел наносит двойной урон',
        },
        {
          id: 9,
          name: 'Нокаутирующий удар',
          icon: 'http://...',
        },
      ],
    };

    const expected = [
      {
        id: 8,
        name: 'Двойной выстрел',
        description: 'Двойной выстрел наносит двойной урон',
        icon: 'http://...',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        description: 'Описание недоступно',
        icon: 'http://...',
      },
    ];

    expect(specAttack(character)).toEqual(expected);
  });
});
