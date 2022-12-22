import Character from '../js/Character';
import Team from '../js/app';

test('Test1', () => {
  const description = new Team('Key');
  const result = { name: 'Key', members: new Set() };
  expect(description).toEqual(result);
});


test('Test 2', () => {
  const team = new Team('Key');
  const unit = new Character('Rois');
  team.add(unit);
  const result = {
    name: 'Key',
    members: new Set([{
      name: 'Rois',
      level: 1,
      health: 100,
    }]),
  };
  expect(team).toEqual(result);
});

test('Test 3', () => {
  const team = new Team('Key');
  const unit = new Character('Rois');
  team.add(unit);
  expect(() => team.add(unit)).toThrow(new Error('Такой персонаж уже есть'));
});


test('Test 4', () => {
  const team = new Team('Key');
  const unit1 = new Character('Rois1');
  const unit2 = new Character('Rois2');
  const unit3 = new Character('Rois3');
  team.addAll(unit1, unit2, unit3);
  const result = {
    name: 'Key',
    members: new Set([{
      name: 'Rois1',
      level: 1,
      health: 100,
    },
    {
      name: 'Rois2',
      level: 1,
      health: 100,
    },
    {
      name: 'Rois3',
      level: 1,
      health: 100,
    }]),
  };
  expect(team).toEqual(result);
});

test('Test 5', () => {
  const team = new Team('Key');
  const unit1 = new Character('Rois1');
  const unit2 = new Character('Rois2');
  const unit3 = new Character('Rois3');
  team.addAll(unit1, unit2, unit3, unit3);
  const result = {
    name: 'Key',
    members: new Set([{
      name: 'Rois1',
      level: 1,
      health: 100,
    },
    {
      name: 'Rois2',
      level: 1,
      health: 100,
    },
    {
      name: 'Rois3',
      level: 1,
      health: 100,
    }]),
  };
  expect(team).toEqual(result);
});