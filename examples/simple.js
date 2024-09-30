const twvoucher = require('@fortune-inc/tw-voucher');

//ใช้โค๊ดอังเปา
twvoucher('082-989-5959', 'xxxxhFog10Ijbmg1c').then(redeemed => {
    // เติมลิ้งอังเปาแล้ว
    console.log(`redeem ซอง ${redeemed.code} ของ ${redeemed.owner_full_name} จำนวน ${redeemed.amount} บาทแล้ว`) //redeem ซอง 0192450a886977712399a5339629a8081az ของ ชวัลรัสย์ จำนวน 10000 บาทแล้ว
}).catch(err => {
    // ลิ้งอังเปาไม่ถูก / ใช้ไปแล้ว!
    console.error('invaild voucher code')
})

//ใช้ลิ้งอังเปา
twvoucher('082-989-5959', 'https://gift.truemoney.com/campaign/?v=0192450a886977712399a5339629a8081az').then(redeemed => {
    // เติมลิ้งอังเปาแล้ว
    console.log(`redeem ซอง ${redeemed.code} ของ ${redeemed.owner_full_name} จำนวน ${redeemed.amount} บาทแล้ว`) //redeem ซอง 0192450a886977712399a5339629a8081az ของ ชวัลรัสย์ จำนวน 10000 บาทแล้ว
}).catch(err => {
    // ลิ้งอังเปาไม่ถูก / ใช้ไปแล้ว!
    console.error('invaild voucher code')
})
