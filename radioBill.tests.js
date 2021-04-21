describe('The Radio Bill Function', function () {
    it('should add R2.75 based on the call entered', function () {
        let radioTest = radioBill();
        radioTest.calcRadio('call');
        radioTest.calcRadio('call');
        radioTest.calcRadio('call');
        assert.equal(radioTest.radioCall(), 8.25);
    
    });
    it('should add R0.75 based on the sms entered', function () {
        let radioTest = radioBill();
        radioTest.calcRadio('sms');
        radioTest.calcRadio('sms');
        radioTest.calcRadio('sms');
        assert.equal(radioTest.radioSms(), 2.25);
    });
    it('should equal R10.5 based on the calls and sms entered', function () {
        let radioTest = radioBill();
        radioTest.calcRadio('sms');
        radioTest.calcRadio('call');
        radioTest.calcRadio('call');
        radioTest.calcRadio('sms');
        radioTest.calcRadio('call');
        radioTest.calcRadio('sms');
        assert.equal(radioTest.radioT(), 10.5);
    });
    describe('Warning & Critical Level', function () {
        it('should return a class name of "warning" since total is over R30', function () {
            let radioTest = radioBill();
            radioTest.calcRadio('sms');
            radioTest.calcRadio('call');
            radioTest.calcRadio('call');
            radioTest.calcRadio('call');
            radioTest.calcRadio('call');
            radioTest.calcRadio('call');
            radioTest.calcRadio('call');
            radioTest.calcRadio('call');
            radioTest.calcRadio('call');
            radioTest.calcRadio('call');
            radioTest.calcRadio('call');
            radioTest.calcRadio('call');
            radioTest.calcRadio('sms');
            assert.equal("warning", radioTest.radioBillLevels());
        });
        it('should return a class name of "critical" since total is over R50', function () {
            let radioTest = radioBill();
            radioTest.calcRadio('sms');
            radioTest.calcRadio('call');
            radioTest.calcRadio('call');
            radioTest.calcRadio('call');
            radioTest.calcRadio('call');
            radioTest.calcRadio('call');
            radioTest.calcRadio('call');
            radioTest.calcRadio('call');
            radioTest.calcRadio('call');
            radioTest.calcRadio('call');
            radioTest.calcRadio('call');
            radioTest.calcRadio('call');
            radioTest.calcRadio('call');
            radioTest.calcRadio('call');
            radioTest.calcRadio('call');
            radioTest.calcRadio('call');
            radioTest.calcRadio('call');
            radioTest.calcRadio('call');
            radioTest.calcRadio('call');
            radioTest.calcRadio('call');
            radioTest.calcRadio('call');
            radioTest.calcRadio('sms');
            assert.equal("critical", radioTest.radioBillLevels());
        });
    });
});