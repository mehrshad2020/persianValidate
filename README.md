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

