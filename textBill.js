function textBill() {

    var callsTotal = 0;
    var smsTotal = 0;

    function textBillTotal(billTypeEntered) {

        if (billTypeEntered === "call") {
            callsTotal += 2.75;
        }
        else if (billTypeEntered === "sms") {
            smsTotal += 0.75;
        }
    } function totalCall() {
        return callsTotal;
    } function totalSms() {
        return smsTotal;
    } function textBillCost() {
        return callsTotal + smsTotal;
    }
    function textBillLevels() {
        if ((textBillCost) >= 50) {
            return "critical"
        }
        else if ((textBillCost) >= 30) {
            return "warning"
        }
    }
        return {
            textBillTotal,
            totalCall,
            totalSms,
            textBillCost,
            textBillLevels
        }
    }

