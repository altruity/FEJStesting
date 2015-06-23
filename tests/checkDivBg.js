describe('getDivBg', function() {
    var d = document.querySelector('.box');

    it('Should be yellow', function() {
        expect(d.style.backgroundColor).toBe('yellow');
    });
});
