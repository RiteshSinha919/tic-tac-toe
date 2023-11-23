import winner from './index'

test('winner calculation',() =>{
    const boxes = ['X','X','X',null,null,null,null,null,null];
    expect(winner(boxes)).toBe('X')
})

test('no winner calculation',() =>{
    const boxes = ['X','O','X',null,null,null,'O',null,'X'];
    expect(winner(boxes)).toBeNull()
})

