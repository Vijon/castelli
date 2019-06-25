import parser from './parser';

const cases = {
    '1371': { year: 1371 },
    'XVIII-secolo': { year: 1700 },
    '25-gennaio-910': { year: 910, month: 1, day: 25 },
    'luglio-1244': { year: 1244, month: 7 },
    'Inizio-del-XIV-secolo': { year: 1300 },
    'Meta-del-XV-secolo': { year: 1400 },
    //'Dal-XIII-secolo-al-XIV-secolo': { year: 1200, to: { year: 1300 } },
    'Dal-1126-al-1130': { year: 1126, to: { year: 1130 } },
}
Object.keys(cases).forEach( (str) => {
    let obj = cases[str];
    test('parsing date: ' + str, () => {
        expect(parser.findDate(str)).toMatchObject(obj);
    });
});