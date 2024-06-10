# نحوه نصب 
نحوه نصب با npm

```bash
npm i persian-validate
```
نحوه نصب با cdn
```html
 <script src="https://cdn.jsdelivr.net/gh/mehrshad2020/persianValidate/persianValidate.js"></script>
```
نحوه نصب به صورت دانلودی:کافیه فایل persianValidate.js از مخزن دانلود کنید و به فایل html مورد نظر لینک کنید به صورت زیر:
```html
<script src="persianValidate.js"></script>
```
# نحوه استفاده
طریقه وارد کردن ماژول ها از طریق import :
```javascript
 import { module_name } from "persian-validate"
```
مثال: وارد کردن تابع validateImageExtension که وظیفه برسی کردن فرمت فایل عکسی رو داره اگر فرمت فایل ["png","jpg"] به ما true  میده در غیر این صورت false:
```javascript
 import { validateImageExtension } from "persian-validate"
 validateImageExtension("mehrshad.png") //true
 validateImageExtension("mehrshad.svg") //false
```
نحوه وارد کردن چند تابع با هم:
```javascript
 import { validateImageExtension,validateUsernameRe } from "persian-validate"
 validateImageExtension("mehrshad.png") //true
 validateImageExtension("mehrshad.svg") //false
console.log(validateUsernameRe("user_123")); // true
console.log(validateUsernameRe("user"));     // false (بدون عدد)
```

اگر به صورت لینک شده از کتابخانه استفاده شده در html باز هم به توابع دسترسی دارید:
```html
 <script src="https://cdn.jsdelivr.net/gh/mehrshad2020/persianValidate/persianValidate.js"></script>
or
<script src="persianValidate.js"></script>
```
```javascript
 validateImageExtension("mehrshad.png") //true
 validateImageExtension("mehrshad.svg") //false
```
این تابع validateUsernameRe یک نام کاربری را به عنوان ورودی می‌گیرد تابع سپس با استفاده از regex.test(username) اعتبارسنجی نام کاربری را انجام می‌دهد و مقدار بولی (true یا false) را برمی‌گرداند.
```javascript
import { validateUsernameRe } from "persian-validate" // نحوه وارد کردن از طریق import
console.log(validateUsernameRe("user_123")); // true
console.log(validateUsernameRe("user"));     // false (بدون عدد)
console.log(validateUsernameRe("user123"));  // false (بدون کاراکتر _)
console.log(validateUsernameRe("user@123")); // false (کاراکتر غیر مجاز)
```
این تابع validateUrl یک URL را به عنوان ورودی می‌گیرد و آن را بررسی می‌کند که آیا یک URL معتبر است یا خیر.
```javascript
import { validateUrl } from "persian-validate" // نحوه وارد کردن از طریق import
 console.log(validateUrl("https://www.example.com")); // true
console.log(validateUrl("example.com"));            // false (نیاز به پروتکل)
console.log(validateUrl("ftp://ftp.example.com"));  // true
console.log(validateUrl("not_a_valid_url"));        // false (ساختار نامعتبر)
```
این تابع valiDatePostalCode یک کد پستی را به عنوان ورودی می‌گیرد و آن را بررسی می‌کند که آیا یک کد پستی معتبر است یا خیر.
```javascript
import { valiDatePostalCode } from "persian-validate" // نحوه وارد کردن از طریق import
console.log(valiDatePostalCode("1234567890")); // true
console.log(valiDatePostalCode("12345"));      // false (کمتر از ۱۰ رقم)
console.log(valiDatePostalCode("abcdefghij")); // false (شامل حروف الفبا)
console.log(valiDatePostalCode("1234567890a")); // false (بیشتر از ۱۰ رقم)
```
این تابع valiDatePhoneNumber یک شماره تلفن همراه ایرانی را به عنوان ورودی می‌گیرد و آن را بررسی می‌کند که آیا یک شماره معتبر است یا خیر.
```javascript
import { valiDatePhoneNumber } from "persian-validate" // نحوه وارد کردن از طریق import
console.log(valiDatePhoneNumber("09123456789")); // true
console.log(valiDatePhoneNumber("09393456789")); // true
console.log(valiDatePhoneNumber("09223456789")); // true
console.log(valiDatePhoneNumber("0912abcd567")); // false (شامل حروف الفبا)
console.log(valiDatePhoneNumber("09301234567")); // true
console.log(valiDatePhoneNumber("09991234567")); // false (شماره دوم 9 نمی‌تواند 9 باشد)
```
این تابع validatePersianName یک نام فارسی را به عنوان ورودی می‌گیرد و آن را بررسی می‌کند که آیا یک نام معتبر است یا خیر.

```javascript
import { validatePersianName } from "persian-validate" // نحوه وارد کردن از طریق import
console.log(validatePersianName("محمد رضا"));      // true
console.log(validatePersianName("Ali Reza"));      // false (حروف لاتین)
console.log(validatePersianName("سارا خانم"));    // true
console.log(validatePersianName("رضا. احمدی"));  // true
```
این تابع validatePassword یک رمز عبور را به عنوان ورودی می‌گیرد و آن را بررسی می‌کند که آیا یک رمز عبور قابل قبول است یا خیر.
```javascript
import { validatePassword } from "persian-validate" // نحوه وارد کردن از طریق import
console.log(validatePassword("StrongPassword123!")); // true
console.log(validatePassword("weak"));              // false (کوتاه)
console.log(validatePassword("short123"));         // false (بدون حرف بزرگ)
console.log(validatePassword("noSymbol123"));      // false (بدون نماد)
```
این تابع validateNationalCode یک کد ملی ایرانی را به عنوان ورودی می‌گیرد و آن را بررسی می‌کند که آیا یک کد ملی معتبر است یا خیر.
```javascript
import { validateNationalCode } from "persian-validate" // نحوه وارد کردن از طریق import
console.log(validateNationalCode("0123456789")); // true
console.log(validateNationalCode("1234567890")); // false
```
این تابع validateObject یک شیء را به عنوان ورودی می‌گیرد و آن را بررسی می‌کند که آیا یک شیء معتبر است یا خیر.


```javascript
import { validateObject } from "persian-validate" // نحوه وارد کردن از طریق import
console.log(validateObject({}));         // true
console.log(validateObject([]));         // true (آرایه نیز یک نوع از شیء است)
console.log(validateObject(null));       // false
console.log(validateObject(123));        // false
console.log(validateObject("string"));   // false
```
این تابع valiDateJalali یک تاریخ شمسی را به عنوان ورودی می‌گیرد و آن را بررسی می‌کند که آیا یک تاریخ معتبر است یا خیر.

```javascript
import { valiDateJalali } from "persian-validate" // نحوه وارد کردن از طریق import
console.log(valiDateJalali("1400/02/30")); // true
console.log(valiDateJalali("1400/06/31")); // false (ماه ششم نمی‌تواند بیشتر از ۳۰ روز داشته باشد)
console.log(valiDateJalali("1400/12/29")); // true
console.log(valiDateJalali("15000/12/29")); // false (سال نامعتبر)
console.log(valiDateJalali("1400/13/29")); // false (ماه نامعتبر)
console.log(valiDateJalali("1400/12")); // false (فرمت نادرست)
```
این تابع validatefuction یک ورودی func را دریافت می‌کند و بررسی می‌کند که آیا نوع آن تابع است یا خیر.
```javascript
import { validatefuction } from "persian-validate" // نحوه وارد کردن از طریق import
console.log(validatefuction(function() {})); // true
console.log(validatefuction(() => {}));       // true (تابع پیکانی)
console.log(validatefuction(123));            // false
console.log(validatefuction("hello"));        // false
console.log(validatefuction({}));             // false
console.log(validatefuction([]));             // false
```
این تابع validateFileSize یک فایل را به عنوان ورودی می‌گیرد و بررسی می‌کند که آیا اندازه فایل کمتر از یا برابر با یک اندازه حداکثری مشخص (به بایت) است یا خیر.file یک شیء فایل است که باید دارای یک ویژگی size باشد که اندازه فایل را به بایت نشان می‌دهد.
maxSize به طور پیش‌فرض برابر با 1024000 بایت (1 مگابایت) تنظیم شده است، اما می‌تواند به هر مقدار دیگری نیز تنظیم شود.
تابع بررسی می‌کند که آیا file.size کمتر از یا برابر با maxSize است و مقدار بولی (true یا false) را برمی‌گرداند.
فرض کنید یک فایل با اندازه 500000 بایت داریم:
```javascript
import { validateFileSize } from "persian-validate" // نحوه وارد کردن از طریق import
let file = { size: 500000 };
console.log(validateFileSize(file));        // true (کمتر از 1 مگابایت)
console.log(validateFileSize(file, 400000)); // false (بیشتر از 400 کیلوبایت)
```
فرض کنید یک فایل با اندازه 1500000 بایت داریم:
```javascript
import { validateFileSize } from "persian-validate" // نحوه وارد کردن از طریق import
let file = { size: 1500000 };
console.log(validateFileSize(file));        // false (بیشتر از 1 مگابایت)
console.log(validateFileSize(file, 2000000)); // true (کمتر از 2 مگابایت)
```
این تابع valiDateEmail یک آدرس ایمیل را به عنوان ورودی می‌گیرد و بررسی می‌کند که آیا فرمت آن معتبر است یا خیر.
```javascript
import { validateEmail } from "persian-validate" // نحوه وارد کردن از طریق import
console.log(validateEmail("test@example.com"));  // true
console.log(validateEmail("test.email@example.com"));  // true
console.log(validateEmail("test.email+1@example.co.uk"));  // true
console.log(validateEmail("test.email@subdomain.example.com"));  // true
console.log(validateEmail("test.email@example"));  // false (بدون دامنه معتبر)
console.log(validateEmail("test.@example.com"));  // false (نقطه قبل از @)
console.log(validateEmail("test@example..com"));  // false (دو نقطه متوالی)
```


در این تابع:
# ویژگی ها
این کتابخانه این توابع رو داره:
|<table>
    <caption>
        <p>Table 1</p>
    </caption>
    <thead>
        <tr>
            <th>توضیحات</th>
            <th>تابع</th>
        </tr>
        <tr>
            <td>
                <table>
                    <tbody>
                        <tr dir="rtl">
                            <td>وظیفه برسی کردن فرمت فایل عکسی رو داره اگر فرمت فایل ["png","jpg"] به ما true میده در غیر این صورت false:</td>
                        </tr>
                    </tbody>
                </table><br>
            </td>
            <td>validateImageExtension</td>
        </tr>
    </thead>
    <tbody></tbody>
</table>

