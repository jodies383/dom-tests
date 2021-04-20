describe('The Text Bill Function', function () {
    it('should add R2.75 based on the call entered', function () {
        let calcText = textBill();
        calcText.textBillTotal('call');
        calcText.textBillTotal('call');
        calcText.textBillTotal('call');
        assert.equal(calcText.totalCall(), 8.25);
    });
    it('should add R0.75 based on the sms entered', function () {
        let calcText = textBill();
        calcText.textBillTotal('sms');
        calcText.textBillTotal('sms');
        calcText.textBillTotal('sms');
        assert.equal(calcText.totalSms(), 2.25);
    });
    it('should add R7 based on the calls and sms entered', function () {
        let calcText = textBill();
        calcText.textBillTotal('sms');
        calcText.textBillTotal('call');
        calcText.textBillTotal('call');
        calcText.textBillTotal('sms');
        assert.equal(calcText.textBillCost(), 7);
    });

    describe('Warning & Critical Level', function () {
        it('should return a class name of "warning" if total is over R30', function () {
            let calcText = textBill();
            calcText.textBillTotal('sms');
            calcText.textBillTotal('call');
            calcText.textBillTotal('call');
            calcText.textBillTotal('call');
            calcText.textBillTotal('call');
            calcText.textBillTotal('call');
            calcText.textBillTotal('call');
            calcText.textBillTotal('call');
            calcText.textBillTotal('call');
            calcText.textBillTotal('call');
            calcText.textBillTotal('call');
            calcText.textBillTotal('call');
            calcText.textBillTotal('sms');
            assert.equal("warning", calcText.textBillLevels());
        });
    });
});
