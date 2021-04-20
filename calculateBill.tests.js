describe('The Calculate Bill Function', function () {

    it('should calculate the bill based on the call string entered', function () {
        let calculate = calculateBillEvent();
        calculate.calBill('call, call, call, call');
        assert.equal(calculate.myBill(), 11);
    });
    it('should calculate the bill based on the sms string entered', function () {
        let calculate = calculateBillEvent();
        calculate.calBill('sms, sms, sms, sms, sms');
        assert.equal(calculate.myBill(), 3.75);
    });
    it('should calculate the bill based on the call and sms string entered', function () {
        let calculate = calculateBillEvent();
        calculate.calBill('call, call, call, sms, sms');
        assert.equal(calculate.myBill(), 9.75);
    });

describe('Warning & Critical Levels', function () {

    it('should return warning since the bill total is over R20', function () {
        let calculate = calculateBillEvent();
        calculate.calBill('call, call, call, call, call, call, call, call');
        
        
        assert.equal("warning", calculate.levels());
    });
    it('should return critical since the bill total is over R30', function () {
        let calculate = calculateBillEvent();
        calculate.calBill('call, call, call, call, call, call, call, call, call, call, call,');
        
        
        assert.equal("critical", calculate.levels());
    });
});
});