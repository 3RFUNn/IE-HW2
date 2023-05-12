# IE-HW2
 `
مدیر آموزش
● ساخت، ویرایش و حذف دروس مصوب و ترمی
● POST /course
● PUT /course/{ID}
● DELETE /course/{ID}
● GET /courses
● GET /course/{ID}
● دیدن لیست اساتید و دانشجویان
❖ GET /students
❖ GET /student/{ID}
❖ GET /Professors
❖ GET /Professor/{ID}
دانشجو
● ویرایش اطالعات قابل تغییر خود )در اینجا باید بررسی شود که آیدی ارسال شده مربوط به خود
دانشجو باشد در غیر این صورت با خطای مناسب پاسخ داده شود(
❖ PUT /student/{ID}
● دیدن لیست دروس با امکان فیلتر بر اساس رشته
● GET /courses
● GET /course/{ID}
استاد
● ویرایش اطالعات قابل تغییر خود )در اینجا مانند مورد قبلی مشابه اعتبارسنجی )validation)
مناسب شود.(
❖ PUT /Professor/{ID}
● دیدن لیست دروس با امکان فیلتر بر اساس رشته
● GET /courses
● GET /course/{ID}
`
